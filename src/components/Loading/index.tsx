import * as S from "./styled";

function Loading() {
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
    >
      <S.Container>
        <S.Title>
          <S.TitleEffect>FestiBook</S.TitleEffect>
        </S.Title>
        <S.Text>
          <S.TextEffect>데이터를 불러오는 중입니다...</S.TextEffect>
        </S.Text>
        <S.Spinner />
      </S.Container>
    </S.FireworksContainer>
  );
}

export default Loading;
