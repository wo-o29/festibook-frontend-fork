import Image from "next/image";

import * as S from "./styled";

interface TooltipProps {
  text: string;
}

function Tooltip({ text }: TooltipProps) {
  return (
    <S.Box>
      <Image src="/icons/info.svg" width={20} height={20} alt="툴팁 정보" />
      <S.Tooltip>
        <S.TooltipText>
          {text}
          <S.Triangle />
        </S.TooltipText>
      </S.Tooltip>
    </S.Box>
  );
}

export default Tooltip;
