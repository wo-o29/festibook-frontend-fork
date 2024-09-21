import axios, { AxiosError, AxiosInstance } from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

export const nextInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const setInstance = (baseUrl: string): AxiosInstance => {
  instance.defaults.baseURL = baseUrl;
  return instance;
};

// 헤더 토큰 추가할 때 사용 등등...
instance.interceptors.request.use(async (config) => {
  try {
    console.log(config);
    // if (getIsServer() && context) {
    //   nextInstance.defaults.headers.cookie = context.req.headers.cookie!;
    // }
    // const res = await nextInstance.get("/api/cookies");
    // const { ACCESS_TOKEN } = res.data;
    // if (ACCESS_TOKEN) {
    //   config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    // }
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error);
    }
  } finally {
    return config;
  }
});

// 에러 처리할 때 사용 등등...
instance.interceptors.response.use();
