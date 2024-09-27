import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { overlay } from "overlay-kit";
import { useForm } from "react-hook-form";
import { z } from "zod";

import WithdrawUserModal from "@/components/Modal/WithdrawUser";
import { useEditNickname } from "@/hooks/useEditNickname";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import setToast from "@/utils/setToast";

import * as S from "./styled";

const userProfileSchema = z.object({
  nickname: z
    .string()
    .regex(
      /^[가-히ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]+$/,
      "특수문자를 제외한 2~20자 사이로 입력해주세요",
    )
    .min(2, "2자 이상으로 입력해주세요")
    .max(20, "20자 이하로 입력해주세요"),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "all",
    defaultValues: {
      nickname: "",
    },
    resolver: zodResolver(userProfileSchema),
  });
  const { data: userInfo } = useGetUserInfo();
  const { mutate: editNicknameMutate } = useEditNickname();

  useEffect(() => {
    reset({ nickname: userInfo?.nickname });
  }, [userInfo?.nickname]);

  const onSubmit = async (formData: any) => {
    if (!userInfo) {
      return;
    }

    const payload = { ...userInfo, nickname: formData.nickname };
    editNicknameMutate(payload, {
      onSuccess: () => {
        setToast("success", "닉네임이 변경되었습니다.");
      },
      onError: () => {
        setToast("error", "잠시 후 다시 시도해 주세요.");
      },
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputBox>
        <S.Label htmlFor="nickname">닉네임</S.Label>
        <S.Input id="nickname" type="text" {...register("nickname")} />
        {errors.nickname?.message && (
          <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
        )}
      </S.InputBox>
      <S.ButtonBox>
        <S.WithdrawButton
          type="button"
          onClick={() => {
            overlay.open(({ isOpen, close, unmount }) => {
              return (
                <WithdrawUserModal
                  title="회원 탈퇴"
                  content="정말 탈퇴하시겠습니까?"
                  subText="탈퇴하시면 복구가 불가능합니다."
                  buttonText="탈퇴하기"
                  isOpen={isOpen}
                  onClose={() => {
                    close();

                    setTimeout(() => {
                      unmount();
                    }, 250);
                  }}
                />
              );
            });
          }}
        >
          회원탈퇴
        </S.WithdrawButton>
        <S.SubmitButton disabled={!isValid || !isDirty} type="submit">
          변경
        </S.SubmitButton>
      </S.ButtonBox>
    </S.Form>
  );
}

export default Form;
