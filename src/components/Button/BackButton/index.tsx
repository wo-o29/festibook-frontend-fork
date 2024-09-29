import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./styled";

function BackButton() {
  const router = useRouter();

  const handleRouteBack = () => {
    router.back();
  };

  return (
    <S.BackButton type="button" onClick={handleRouteBack}>
      <Image
        width={28}
        height={28}
        src="/icons/arrow-left.svg"
        alt="좌측 방향 화살표"
      />
    </S.BackButton>
  );
}

export default BackButton;
