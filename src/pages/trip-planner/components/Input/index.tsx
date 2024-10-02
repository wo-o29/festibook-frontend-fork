import { forwardRef, InputHTMLAttributes } from "react";

import * as S from "./styled";

interface PlannerInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  icon: string;
  errorMessage?: string;
}

export default forwardRef<HTMLInputElement, PlannerInputProps>(
  function PlannerInput(
    { labelText, icon, errorMessage, ...restProps }: PlannerInputProps,
    ref,
  ) {
    return (
      <S.Container>
        <S.Label htmlFor={restProps.id}>
          {labelText}
          <S.Asterisk>*</S.Asterisk>
        </S.Label>
        <S.InputBox>
          <S.Icon
            src={`/icons/${icon}.svg`}
            alt={`${labelText} 아이콘`}
            width={20}
            height={20}
          />
          <S.Input ref={ref} {...restProps} />
        </S.InputBox>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      </S.Container>
    );
  },
);
