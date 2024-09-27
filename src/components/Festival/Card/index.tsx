import Image from "next/image";

import useDropdown from "@/hooks/useDropdown";
import { BookmarkFestivalType } from "@/types";

import * as S from "./styled";

function FestivalCard({
  title,
  address1,
  startDate,
  endDate,
  thumbnailUrl,
}: Omit<BookmarkFestivalType, "eventId">) {
  const { isOpen, toggle, ref: buttonRef } = useDropdown<HTMLButtonElement>();

  return (
    <S.Card>
      <S.ImageBox>
        <Image
          src={thumbnailUrl}
          width={220}
          height={200}
          alt={`${title} 사진`}
        />
      </S.ImageBox>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.KebabButton ref={buttonRef} type="button" onClick={toggle}>
          <Image
            src="/icons/kebab.svg"
            width={20}
            height={20}
            alt="드롭다운 열기"
          />
        </S.KebabButton>

        {isOpen && (
          <S.Dropdown>
            <S.DropdownItem>삭제하기</S.DropdownItem>
          </S.Dropdown>
        )}
      </S.Box>
      <S.Region>{address1}</S.Region>
      <S.Date>{`${startDate} ~ ${endDate}`}</S.Date>
    </S.Card>
  );
}

export default FestivalCard;
