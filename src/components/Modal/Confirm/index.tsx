import * as S from "./styled";
import Modal, { type ModalProps } from "..";

export interface ConfirmModalProps
  extends Omit<
    ModalProps,
    "children" | "$width" | "$height" | "$mobileWidth" | "$mobileHeight"
  > {
  title: string;
  content: string;
  subText: string;
  buttonText: string;
  onClick: () => void;
}

function ConfirmModal({
  isOpen,
  onClose,
  title,
  content,
  subText,
  buttonText,
  onClick,
}: ConfirmModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      $width={32}
      $height={20}
      $mobileWidth={20}
      $mobileHeight={17}
    >
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
      <S.SubText>{subText}</S.SubText>
      <S.ButtonBox>
        <S.Button type="button" onClick={onClick}>
          {buttonText}
        </S.Button>
      </S.ButtonBox>
    </Modal>
  );
}

export default ConfirmModal;
