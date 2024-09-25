import Link from "next/link";
import { GetServerSidePropsContext } from "next/types";

import { dehydrate, QueryClient } from "@tanstack/react-query";
import { overlay } from "overlay-kit";

import { getUserInfo } from "@/apis/api";
import { setContext } from "@/apis/axios";
import LoginModal from "@/components/Modal/Login";
import { userInfoKey } from "@/constants/queryKey";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient();

  try {
    setContext(context);
    await queryClient.prefetchQuery({
      queryKey: userInfoKey.info(),
      queryFn: getUserInfo,
    });

    return {
      props: { dehydrateState: dehydrate(queryClient) },
    };
  } catch (error) {
    return {
      props: { dehydrateState: null },
    };
  }
};

export default function Home() {
  const { data } = useGetUserInfo();

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
      <button
        type="button"
        onClick={() => {
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <LoginModal
                isOpen={isOpen}
                onClose={() => {
                  close();

                  setTimeout(() => {
                    unmount();
                  }, 250);
                }}
              />
            );
          });
        }}
      >
        로그인 버튼
      </button>
      <Link href="/">초기 설정 ㅇ_ㅇ</Link>
    </>
  );
}
