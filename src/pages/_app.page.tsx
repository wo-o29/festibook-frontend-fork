import type { AppProps } from "next/app";
import { NextPage } from "next/types";

import { ReactElement, ReactNode, useState } from "react";

import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import reset from "@/styles/reset";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout; // components 속성이 NextPageWithLayout 타입을 따르도록 변경
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}
