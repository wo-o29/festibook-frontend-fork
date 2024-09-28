import { Suspense } from "react";

import ReviewSkeleton from "./Skeleton";
import * as S from "./styled";
import ReviewList from "../../../../components/ReviewList";
import SectionTitle from "../SectionTitle";
import Tooltip from "../Tooltip";

function MyPageReview() {
  return (
    <S.Section>
      <S.Header>
        <S.HeaderBox>
          <SectionTitle title="작성한 후기" />
          <Tooltip text="축제 데이터가 사라질 경우 목록에 보이지 않을 수 있습니다." />
        </S.HeaderBox>
        <S.MoreLink href="mypage/review">더보기</S.MoreLink>
      </S.Header>
      <Suspense fallback={<ReviewSkeleton count={3} />}>
        <ReviewList />
      </Suspense>
    </S.Section>
  );
}

export default MyPageReview;
