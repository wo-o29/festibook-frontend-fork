import { Suspense } from "react";

import FestivalGrid from "@/components/Festival/Grid";

import * as S from "./styled";
import SectionTitle from "../SectionTitle";
import Tooltip from "../Tooltip";

function Bookmark() {
  return (
    <S.Section>
      <S.Header>
        <SectionTitle title="축제 즐겨찾기" />
        <Tooltip text="축제 데이터가 사라질 경우 목록에 보이지 않을 수 있습니다." />
      </S.Header>
      <Suspense fallback={<div>123</div>}>
        <FestivalGrid />
      </Suspense>
    </S.Section>
  );
}

export default Bookmark;
