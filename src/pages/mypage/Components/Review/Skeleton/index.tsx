import * as S from "./styled";

interface ReviewSkeletonProps {
  count: number;
}

function ReviewSkeleton({ count }: ReviewSkeletonProps) {
  return (
    <S.ListSkeleton>
      {Array.from({ length: count }, (_, index) => (
        <S.ItemSkeleton key={index} />
      ))}
    </S.ListSkeleton>
  );
}

export default ReviewSkeleton;
