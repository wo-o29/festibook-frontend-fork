import React, { ReactElement, Suspense } from "react";

import HeaderLayout from "@/components/Layout/HeaderLayout";
import ReviewList from "@/components/ReviewList";

import * as S from "./styled";
import ReviewSkeleton from "../components/Review/Skeleton";

function ReviewPage() {
  return (
    <S.Container>
      <S.Title>작성한 후기 목록</S.Title>
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
