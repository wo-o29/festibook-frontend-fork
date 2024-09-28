import * as S from "./styled";
import SkeletonFestivalCard from "../Card";

interface SkeletonGridProps {
  count: number;
}

function SkeletonGrid({ count }: SkeletonGridProps) {
  return (
    <S.Grid>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonFestivalCard key={index} />
      ))}
    </S.Grid>
  );
}

export default SkeletonGrid;
