import MetaData from "@/components/MetaData";

import * as S from "./styled";

function TripPlannerLoading() {
  return (
    <>
      <MetaData title="AI 여행 플래너 | FestiBook" />
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
          <S.EarthImage
            src="/icons/earth.svg"
            width={500}
            height={500}
            alt="지구 모양 아이콘"
          />
          <S.Text>✈️ 여행 최적의 경로를 AI가 설계 중입니다.</S.Text>
          <S.SubText>🕖 평균 30초 ~ 1분정도의 시간이 소요됩니다.</S.SubText>
        </S.Container>
      </S.FireworksContainer>
    </>
  );
}

export default TripPlannerLoading;
