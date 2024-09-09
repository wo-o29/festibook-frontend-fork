import Image from "next/image";

import { SocialButton } from "../styled";

function NaverLoginButton() {
  return (
    <SocialButton type="button">
      <Image
        src="/icons/naver.svg"
        width={60}
        height={60}
        alt="네이버 로그인"
      />
    </SocialButton>
  );
}

export default NaverLoginButton;
