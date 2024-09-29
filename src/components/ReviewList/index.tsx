import { useGetMyPageReview } from "@/hooks/useGetMyPageReview";

import ReviewItem from "./ReviewItem";
import * as S from "./styled";

function ReviewList() {
  const { data: reviewData } = useGetMyPageReview();

  return (
    <S.List>
      {reviewData.length > 0 ? (
        reviewData
          .slice(0, 3)
          .map((review) => (
            <ReviewItem
              key={review.id}
              review={review.content}
              title={review.eventName}
              reviewDate={review.createdAt}
            />
          ))
      ) : (
        <S.Empty>작성한 후기가 없습니다.</S.Empty>
      )}
    </S.List>
  );
}

export default ReviewList;
