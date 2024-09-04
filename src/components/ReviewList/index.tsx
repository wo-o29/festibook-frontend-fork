import { BookmarkReviewType } from "@/types";

import ReviewItem from "./ReviewItem";
import * as S from "./styled";

interface ReviewListProps {
  reviewData: BookmarkReviewType[];
}

function ReviewList({ reviewData }: ReviewListProps) {
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
