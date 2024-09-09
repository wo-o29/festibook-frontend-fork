import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

// 헤더 토큰 추가할 때 사용 등등...
instance.interceptors.request.use();

// 에러 처리할 때 사용 등등...
instance.interceptors.response.use();
