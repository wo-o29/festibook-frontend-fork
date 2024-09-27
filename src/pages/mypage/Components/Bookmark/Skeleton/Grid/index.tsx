import * as S from "./styled";
import SkeletonFestivalCard from "../Card";

function SkeletonGrid() {
  return (
    <S.Grid>
      {Array.from({ length: 4 }, (_, i) => ({ id: i })).map((value) => {
        return <SkeletonFestivalCard key={value.id} />;
      })}
    </S.Grid>
  );
}

export default SkeletonGrid;
