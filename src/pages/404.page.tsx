import Fireworks from "@fireworks-js/react";

import * as S from "../styles/404.styled";

function NotFound() {
  return (
    <S.FireworksContainer
      autostart={true}
      options={{
        particles: 200, // 입자의 수
        traceLength: 10, // 입자의 길이
        traceSpeed: 2, // 입자의 속도
        delay: { min: 100, max: 100 }, // 입자 생성 지연 시간 범위
        brightness: { min: 30, max: 100 }, // 밝기 범위
        decay: { min: 0.01, max: 0.02 }, // 소멸 속도 범위
      }}
      style={{ width: "100vw", height: "calc(100vh - 5px)" }}
    >
      <S.Container>
        <S.Title>404</S.Title>
        <S.EarthImage
          src="/icons/earth.svg"
          width={320}
          height={500}
          alt="지구 모양 아이콘"
        />
        <S.Text>존재하지 않는 페이지입니다.</S.Text>
        <S.Box>
          <S.Button href="/">메인으로 돌아가기</S.Button>
        </S.Box>
      </S.Container>
    </S.FireworksContainer>
  );
}

export default NotFound;
