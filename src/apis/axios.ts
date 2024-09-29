import Router from "next/router";
import { GetServerSidePropsContext } from "next/types";

import axios, { AxiosError, AxiosInstance } from "axios";

import { ReissueAccessToken } from "./api";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
});

export const setInstance = (baseUrl: string): AxiosInstance => {
  instance.defaults.baseURL = baseUrl;
  return instance;
};

export const nextInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_DOMAIN
      : "http://localhost:3000",
});

let context: GetServerSidePropsContext | null = null;
export const setContext = (_context: GetServerSidePropsContext) => {
  context = _context;
};

// // 헤더 토큰 추가할 때 사용 등등...
instance.interceptors.request.use(async (config) => {
  try {
    // sever side
    if (typeof window === "undefined" && context?.req.headers.cookie) {
      nextInstance.defaults.headers.cookie = context.req.headers.cookie;
    }

    const response = await nextInstance.get("/api/cookies");
    const { accessToken } = response.data;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error);
    }
  } finally {
    return config;
  }
});

// 에러 처리할 때 사용 등등...
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    if (error.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        // 기존 리프레쉬 토큰 가져오기
        const response = await nextInstance.get("/api/cookies");
        const { refreshToken } = response.data;

        // 액세스 토큰 재발급
        const accessToken = await ReissueAccessToken(refreshToken);

        // 새로 발급받은 토큰들 쿠키에 저장
        await nextInstance.post("/api/setCookies", {
          accessToken,
          refreshToken,
        });

        instance.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        originalConfig.headers["Authorization"] = `Bearer ${accessToken}`;

        // 기존 요청 재시동
        return instance(originalConfig);
      } catch (error) {
        Router.push("/");
        return Promise.reject(error);
      }
    }
  },
);
