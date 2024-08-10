import Image from "next/image";

import { MODAL_TITLE } from "@/constants/modal";

import LoginModal from "./Login";
import * as S from "./styled";
import Portal from "../Portal";

const MODAL_RENDER: Record<keyof typeof MODAL_TITLE, JSX.Element> = {
  [MODAL_TITLE.LOGIN]: <LoginModal />,
};

interface ModalProps {
  title: keyof typeof MODAL_TITLE;
  currentState: { isOpen: boolean; close: boolean };
  onClose: () => void;
}

function Modal({ title, currentState, onClose }: ModalProps) {
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
        {MODAL_RENDER[title]}
      </S.Wrap>
    </Portal>
  );
}

export default Modal;
