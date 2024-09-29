import { Suspense } from "react";

import FestivalGrid from "@/components/Festival/Grid";

import SkeletonGrid from "./Skeleton/SkeletonGrid";
import * as S from "./styled";
import SectionTitle from "../../pages/mypage/components/SectionTitle";
import Tooltip from "../../pages/mypage/components/Tooltip";

function Bookmark() {
  return (
    <S.Section>
      <S.Header>
        <S.HeaderBox>
          <SectionTitle title="축제 즐겨찾기" />
          <Tooltip text="축제 데이터가 사라질 경우 목록에 보이지 않을 수 있습니다." />
        </S.HeaderBox>
        <S.MoreLink href="mypage/bookmark">더보기</S.MoreLink>
      </S.Header>
      <Suspense fallback={<SkeletonGrid count={4} />}>
        <FestivalGrid />
      </Suspense>
    </S.Section>
  );
}

export default Bookmark;
