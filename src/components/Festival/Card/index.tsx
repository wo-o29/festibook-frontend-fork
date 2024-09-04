import Image from "next/image";

import useDropdown from "@/hooks/useDropdown";
import { BookmarkFestivalType } from "@/types";

import * as S from "./styled";

interface FestivalCardProps extends Omit<BookmarkFestivalType, "id"> {
  hasKebab: boolean;
}

function FestivalCard({
  title,
  region,
  startDate,
  endDate,
  imageUrl,
  isHolding,
  isBookmarked,
  hasKebab,
}: FestivalCardProps) {
  const { isOpen, toggle, ref: buttonRef } = useDropdown<HTMLButtonElement>();

  return (
    <S.Card>
      <S.ImageBox>
        <S.Label isHolding={isHolding}>{isHolding ? "개최중" : "종료"}</S.Label>
        <Image src={imageUrl} width={220} height={200} alt={`${title} 사진`} />
      </S.ImageBox>
      <S.Box>
        <S.Title>{title}</S.Title>
        {hasKebab && (
          <S.KebabButton ref={buttonRef} type="button" onClick={toggle}>
            <Image
              src="/icons/kebab.svg"
              width={20}
              height={20}
              alt="드롭다운 열기"
            />
          </S.KebabButton>
        )}
        {isOpen && (
          <S.Dropdown>
            <S.DropdownItem>삭제하기</S.DropdownItem>
          </S.Dropdown>
        )}
      </S.Box>

      <S.Region>{region}</S.Region>
      <S.Date>{`${startDate} ~ ${endDate}`}</S.Date>
    </S.Card>
  );
}

export default FestivalCard;
