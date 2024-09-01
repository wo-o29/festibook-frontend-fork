import * as S from "./styled";
import SectionTitle from "../SectionTitle";
import Tooltip from "../Tooltip";

function Review() {
  return (
    <S.Section>
      <S.Header>
        <SectionTitle title="작성한 후기" />
        <Tooltip text="축제 데이터가 사라질 경우 목록에 보이지 않을 수 있습니다." />
      </S.Header>
    </S.Section>
  );
}

export default Review;
