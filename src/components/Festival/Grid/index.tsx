import { useGetBookmarkFestival } from "@/hooks/useGetBookmarkFestival";

import * as S from "./styled";
import FestivalCard from "../Card";

function FestivalGrid() {
  const { data: festivalData } = useGetBookmarkFestival();

  if (festivalData.length > 0) {
    return (
      <S.Grid>
        {festivalData.map((festival) => {
          const { eventId, title, address1, startDate, endDate, thumbnailUrl } =
            festival;

          return (
            <FestivalCard
              key={eventId}
              title={title}
              address1={address1}
              startDate={startDate}
              endDate={endDate}
              thumbnailUrl={thumbnailUrl}
            />
          );
        })}
        ;
      </S.Grid>
    );
  }

  return <S.Empty>즐겨찾기 한 축제가 없습니다.</S.Empty>;
}

export default FestivalGrid;
