import Router from "next/router";

import { nextInstance } from "@/apis/axios";
import { useWithdrawUser } from "@/hooks/useWithdrawUser";
import setToast from "@/utils/setToast";

import ConfirmModal, { type ConfirmModalProps } from "../Confirm";

function WithdrawUserModal({
  isOpen,
  onClose,
  title,
  content,
  subText,
  buttonText,
}: Omit<ConfirmModalProps, "onClick">) {
  const { mutate: withdrawUserMutate } = useWithdrawUser();

  const handleButtonClick = () => {
    withdrawUserMutate(undefined, {
      onSuccess: async () => {
        setToast("success", "회원 탈퇴되었습니다.");
        await nextInstance.get("/api/clearCookies");
        Router.push("/");
        onClose();
      },
      onError: () => {
        setToast("error", "잠시 후 다시 시도해 주세요.");
      },
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      content={content}
      subText={subText}
      buttonText={buttonText}
      onClick={handleButtonClick}
    />
  );
}

export default WithdrawUserModal;
