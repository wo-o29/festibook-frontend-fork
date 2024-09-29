import * as S from "./styled";

function SkeletonFestivalCard() {
  return (
    <S.SkeletonCard>
      <S.SkeletonImageBox />
      <S.SkeletonBox>
        <S.SkeletonTitle />
        <S.SkeletonKebabButton />
      </S.SkeletonBox>
      <S.SkeletonRegion />
      <S.SkeletonDate />
    </S.SkeletonCard>
  );
}

export default SkeletonFestivalCard;
