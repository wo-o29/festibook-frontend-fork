import * as S from "./styled";

interface MyPageReviewItemProps {
  review: string;
  title: string;
  reviewDate: string;
}

function ReviewItem({ review, title, reviewDate }: MyPageReviewItemProps) {
  return (
    <S.Item>
      <S.Title>{review}</S.Title>
      <S.Box>
        <span>{title}</span>
        <span>{reviewDate}</span>
      </S.Box>
    </S.Item>
  );
}

export default ReviewItem;
