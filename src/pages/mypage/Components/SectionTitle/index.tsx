import * as S from "./styled";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return <S.Title>{title}</S.Title>;
}

export default SectionTitle;
