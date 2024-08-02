import { GuideBookDataListType } from "@/types";

import * as S from "./styled";

interface GuideBookItemProps {
  data: GuideBookDataListType;
}

function GuideBookItem({ data }: GuideBookItemProps) {
  console.log(data);
  return (
    <S.LinkItem href={data["가이드북 링크"]} target="_blank">
      <p>{`제목: ${data["제목"]}`}</p>
    </S.LinkItem>
  );
}

export default GuideBookItem;
