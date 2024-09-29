import { ReactElement } from "react";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBookmarkFestival, getMyPageReview } from "@/apis/api";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

import Bookmark from "./components/Bookmark/index";
import Planner from "./components/Planner/index";
import Profile from "./components/Profile/index";
import MyPageReview from "./components/Review/index";
import * as S from "./styled";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

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
    <S.Container>
      <S.Box>
        <MyPageReview />
        <Profile />
      </S.Box>
      <Bookmark />
      <Planner />
    </S.Container>
  );
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default MyPage;
