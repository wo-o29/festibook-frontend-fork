import { GetServerSidePropsContext } from "next/types";

import React, { ReactElement, Suspense } from "react";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getMyPageReview } from "@/apis/api";
import { setContext } from "@/apis/axios";
import BackButton from "@/components/Button/BackButton";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import MetaData from "@/components/MetaData";
import ReviewSkeleton from "@/components/Review/Skeleton";
import ReviewList from "@/components/ReviewList";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

import * as S from "./styled";

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const queryClient = new QueryClient();
  setContext(context);
  try {
    await queryClient.prefetchQuery({
      queryKey: BOOKMARK_KEYS.reviews(),
      queryFn: getMyPageReview,
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

function ReviewPage() {
  return (
    <>
      <MetaData title="리뷰 전체보기 | FestiBook" />
      <S.Container>
        <S.Box>
          <BackButton />
          <S.Title>작성한 후기 목록</S.Title>
        </S.Box>
        <Suspense fallback={<ReviewSkeleton count={10} />}>
          <ReviewList />
        </Suspense>
      </S.Container>
    </>
  );
}

ReviewPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default ReviewPage;
