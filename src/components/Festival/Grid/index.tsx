import { useGetBookmarkFestival } from "@/hooks/useGetBookmarkFestival";

import * as S from "./styled";
import FestivalCard from "../Card";

function FestivalGrid() {
  const { data: festivalData } = useGetBookmarkFestival();

  if (!festivalData) {
    return null;
  }

  return (
    <S.Grid>
      {festivalData.map((festival) => {
        const {
          id,
          title,
          region,
          startDate,
          endDate,
          imageUrl,
          isHolding,
          isBookmarked,
        } = festival;
        return (
          <FestivalCard
            key={id}
            title={title}
            region={region}
            startDate={startDate}
            endDate={endDate}
            imageUrl={imageUrl}
            isHolding={isHolding}
            isBookmarked={isBookmarked}
            hasKebab
          />
        );
      })}
    </S.Grid>
  );
}

export default FestivalGrid;
