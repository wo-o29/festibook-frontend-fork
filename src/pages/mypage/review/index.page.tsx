import React, { ReactElement, Suspense } from "react";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getMyPageReview } from "@/apis/api";
import BackButton from "@/components/Button/BackButton";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import ReviewSkeleton from "@/components/Review/Skeleton";
import ReviewList from "@/components/ReviewList";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

import * as S from "./styled";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

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
    <S.Container>
      <S.Box>
        <BackButton />
        <S.Title>작성한 후기 목록</S.Title>
      </S.Box>
      <Suspense fallback={<ReviewSkeleton count={10} />}>
        <ReviewList />
      </Suspense>
    </S.Container>
  );
}

ReviewPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default ReviewPage;
