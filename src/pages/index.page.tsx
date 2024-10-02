import Router from "next/router";
import { GetServerSidePropsContext } from "next/types";

import { dehydrate, QueryClient } from "@tanstack/react-query";
import { overlay } from "overlay-kit";

import { getUserInfo } from "@/apis/api";
import { nextInstance, setContext } from "@/apis/axios";
import MetaData from "@/components/MetaData";
import LoginModal from "@/components/Modal/Login";
import { USER_INFO_KEYS } from "@/constants/queryKey";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import setToast from "@/utils/setToast";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient();

  try {
    setContext(context);
    await queryClient.prefetchQuery({
      queryKey: USER_INFO_KEYS.info(),
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

  const handleLogoutButtonClick = async () => {
    const response = await nextInstance.get("/api/clearCookies");

    if (response.status === 500) {
      setToast("error", response.data.message);
      return;
    }

    Router.reload();
  };

  return (
    <>
      <MetaData title="국내 모든 축제 정보 한 곳에서 확인하기 | FestiBook" />
      <h1>{JSON.stringify(data) ?? "로그아웃 상태"}</h1>
      <div>
        <button onClick={handleLogoutButtonClick}>로그아웃</button>
      </div>
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
    </>
  );
}
