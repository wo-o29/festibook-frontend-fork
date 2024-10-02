import { forwardRef, InputHTMLAttributes } from "react";

import * as S from "./styled";

const INTENSITY_LIST = ["약", "중", "강"];

interface IntensityRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  selected: string;
}

export default forwardRef<HTMLInputElement, IntensityRadioProps>(
  function IntensityRadio(
    { selected, ...restProps }: IntensityRadioProps,
    ref,
  ) {
    return (
      <S.Container>
        <S.Text>
          여행 강도 <S.Asterisk>*</S.Asterisk>
        </S.Text>
        <S.UList>
          {INTENSITY_LIST.map((value) => (
            <S.ListItem key={value}>
              <S.Input
                type="radio"
                value={value}
                id={value}
                ref={ref}
                {...restProps}
              />
              <S.Label htmlFor={value} selected={selected === value}>
                {value}
              </S.Label>
            </S.ListItem>
          ))}
        </S.UList>
      </S.Container>
    );
  },
);
