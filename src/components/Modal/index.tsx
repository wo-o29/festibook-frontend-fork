import Image from "next/image";

import { MODAL_TITLE } from "@/constants/modal";

import * as S from "./styled";
import Portal from "../Portal";

interface ModalProps {
  key: keyof typeof MODAL_TITLE;
  currentState: { isOpen: boolean; close: boolean };
  onClose: () => void;
}

function Modal({ key, currentState, onClose }: ModalProps) {
  return (
    <Portal>
      <S.Wrap isClose={currentState.close}>
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
      </S.Wrap>
    </Portal>
  );
}

export default Modal;
