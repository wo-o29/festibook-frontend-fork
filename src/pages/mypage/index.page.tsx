import { GetServerSidePropsContext } from "next/types";

import { ReactElement } from "react";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBookmarkFestival, getMyPageReview } from "@/apis/api";
import { setContext } from "@/apis/axios";
import Bookmark from "@/components/Bookmark";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import MetaData from "@/components/MetaData";
import Planner from "@/components/Planner";
import Profile from "@/components/Profile";
import MyPageReview from "@/components/Review";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

import * as S from "./styled";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient();
  setContext(context);
  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: BOOKMARK_KEYS.festival(),
        queryFn: getBookmarkFestival,
      }),
      queryClient.prefetchQuery({
        queryKey: BOOKMARK_KEYS.reviews(),
        queryFn: getMyPageReview,
      }),
    ]);

    return {
      props: { dehydrateState: dehydrate(queryClient) },
    };
  } catch (error) {
    return {
      props: { dehydrateState: null },
    };
  }
};

function MyPage() {
  return (
    <>
      <MetaData title="마이 페이지 | FestiBook" />
      <S.Container>
        <S.Box>
          <MyPageReview />
          <Profile />
        </S.Box>
        <Bookmark />
        <Planner />
      </S.Container>
    </>
  );
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default MyPage;
