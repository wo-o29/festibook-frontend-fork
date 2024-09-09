import { useGetMyPageReview } from "@/hooks/useGetMyPageReview";

import ReviewItem from "./ReviewItem";
import * as S from "./styled";

function ReviewList() {
  const { data: reviewData } = useGetMyPageReview();
  return (
    <S.List>
      {reviewData?.map((review) => (
        <ReviewItem
          key={review.id}
          review={review.review}
          title={review.title}
          reviewDate={review.reviewDate}
        />
      ))}
    </S.List>
  );
}

export default ReviewList;
