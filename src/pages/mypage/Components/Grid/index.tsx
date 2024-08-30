import * as S from "./styled";
import SectionTitle from "../SectionTitle";
import Tooltip from "../Tooltip";

interface BaseGridProps {
  list?: any[]; // 즐겨찾기, AI 여행 플래너 데이터 배열 타입으로 수정 예정
  title: string;
}

interface TooltipGridProps extends BaseGridProps {
  hasTooltip: true;
  tooltipText: string;
}

interface NoTooltipGridProps extends BaseGridProps {
  hasTooltip?: false;
  tooltipText?: undefined;
}

type GridProps = TooltipGridProps | NoTooltipGridProps;

function Grid({ list, title, hasTooltip, tooltipText }: GridProps) {
  return (
    <S.Section>
      <S.Header>
        <SectionTitle title={title} />
        {hasTooltip && <Tooltip text={tooltipText} />}
      </S.Header>
      {/* <S.List>
        {list.map((item, index) => (
          <S.Item key={index}>{item}</S.Item>
        ))}
      </S.List> */}
    </S.Section>
  );
}

export default Grid;
