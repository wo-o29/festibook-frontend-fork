import React, { ReactElement, Suspense } from "react";

import BackButton from "@/components/Button/BackButton";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import ReviewList from "@/components/ReviewList";

import * as S from "./styled";
import ReviewSkeleton from "../components/Review/Skeleton";

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
