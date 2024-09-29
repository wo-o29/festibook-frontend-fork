import Image from "next/image";

import { ReactNode } from "react";

import * as S from "./styled";
import Portal from "../Portal";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  $width: number;
  $height: number;
  $mobileWidth: number;
  $mobileHeight: number;
}

function Modal({
  children,
  isOpen,
  onClose,
  $width,
  $height,
  $mobileWidth,
  $mobileHeight,
}: ModalProps) {
  return (
    <Portal>
      <S.Container isOpen={isOpen}>
        <S.Wrap
          $width={$width}
          $height={$height}
          $mobileWidth={$mobileWidth}
          $mobileHeight={$mobileHeight}
        >
          <S.ButtonBox>
            <S.CloseButton type="button" onClick={onClose}>
              <Image
                src="./icons/close.svg"
                width={30}
                height={30}
                alt="모달 닫기"
              />
            </S.CloseButton>
          </S.ButtonBox>
          {children}
        </S.Wrap>
      </S.Container>
    </Portal>
  );
}

export default Modal;
