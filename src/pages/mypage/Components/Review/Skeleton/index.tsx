import * as S from "./styled";

function BookmarkReviewSkeleton() {
  return (
    <S.ListSkeleton>
      <S.ItemSkeleton />
      <S.ItemSkeleton />
      <S.ItemSkeleton />
    </S.ListSkeleton>
  );
}

export default BookmarkReviewSkeleton;
