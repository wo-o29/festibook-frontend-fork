import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0, // 재시도 횟수
            staleTime: 1 * 60 * 1000, // 1분
            gcTime: 5 * 60 * 1000, // 5분
            throwOnError: true, // 에러 발생 시 컴포넌트에 에러를 전파
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
