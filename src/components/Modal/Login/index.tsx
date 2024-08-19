import Image from "next/image";

import React from "react";

import * as S from "./styled";
import { ModalProps } from "..";
import Modal from "..";

function LoginModal({ isOpen, onClose }: Omit<ModalProps, "children">) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Box>
        <Image
          src="/icons/logo.svg"
          width={300}
          height={150}
          alt="페스티북 로고"
        />
        <S.Title>SNS 계정으로 간편하게 시작하기</S.Title>
        <S.SocialBox>
          <S.SocialButton type="button">
            <Image
              src="/icons/google.svg"
              width={60}
              height={60}
              alt="구글 로그인"
            />
          </S.SocialButton>
          <S.SocialButton type="button">
            <Image
              src="/icons/kakao.svg"
              width={60}
              height={60}
              alt="카카오 로그인"
            />
          </S.SocialButton>
          <S.SocialButton type="button">
            <Image
              src="/icons/naver.svg"
              width={60}
              height={60}
              alt="네이버 로그인"
            />
          </S.SocialButton>
        </S.SocialBox>
      </S.Box>
    </Modal>
  );
}

export default LoginModal;
