import { Suspense } from "react";

import { useGetMyPageReview } from "@/hooks/useGetMyPageReview";

import * as S from "./styled";
import ReviewList from "../../../../components/ReviewList";
import BookmarkReviewSkeleton from "../Review/Skeleton";
import SectionTitle from "../SectionTitle";
import Tooltip from "../Tooltip";

function MyPageReview() {
  const { data: reviewData } = useGetMyPageReview();

  return (
    <S.Section>
      <S.Header>
        <SectionTitle title="작성한 후기" />
        <Tooltip text="축제 데이터가 사라질 경우 목록에 보이지 않을 수 있습니다." />
      </S.Header>
      <Suspense fallback={<BookmarkReviewSkeleton />}>
        <ReviewList reviewData={reviewData!} />
      </Suspense>
    </S.Section>
  );
}

export default MyPageReview;
