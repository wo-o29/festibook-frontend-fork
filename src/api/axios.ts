import axios from "axios";

export const instance = axios.create({
  baseURL: "baseURL 추가 예정",
  headers: {
    "Content-Type": "application/json",
  },
});

// 헤더 토큰 추가할 때 사용 등등...
instance.interceptors.request.use();

// 에러 처리할 때 사용 등등...
instance.interceptors.response.use();
