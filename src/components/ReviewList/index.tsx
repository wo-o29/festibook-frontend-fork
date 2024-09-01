import ReviewItem from "./ReviewItem";
import * as S from "./styled";

const data = [
  {
    id: 1,
    review: "토마토 축제 재밌어요",
    title: "토마토 축제",
    reviewDate: "2021-08-01",
  },
  {
    id: 1,
    review: "토마토 축제 재밌어요",
    title: "토마토 축제",
    reviewDate: "2021-08-01",
  },
  {
    id: 1,
    review: "토마토 축제 재밌어요",
    title: "토마토 축제",
    reviewDate: "2021-08-01",
  },
];

function ReviewList() {
  return (
    <S.List>
      {data.map((item) => (
        <ReviewItem
          key={item.id}
          review={item.review}
          title={item.title}
          reviewDate={item.reviewDate}
        />
      ))}
    </S.List>
  );
}

export default ReviewList;
