import { ReactElement } from "react";

import HeaderLayout from "@/components/Layout/HeaderLayout";
import MetaData from "@/components/MetaData";
import { useGetTripPlan } from "@/hooks/useGetTripPlan";

import PlannerForm from "./components/Form";
import TripPlannerLoading from "./components/Loading";
import TripPlanner from "./components/Planner";
import { aiMockData } from "./data";
import * as S from "./styled";

function TripPlannerPage() {
  const { data, isPending, mutate } = useGetTripPlan();

  if (isPending) {
    return <TripPlannerLoading />;
  }

  return (
    <>
      <MetaData title="AI 여행 플래너 | FestiBook" />
      <main>
        {!data ? (
          <S.BannerBox>
            <S.BannerImage
              src="/images/banner.png"
              alt="여행 배너"
              width={1280}
              height={210}
            />
            <PlannerForm mutate={mutate} />
          </S.BannerBox>
        ) : (
          <TripPlanner data={data.itinerary} />
        )}
      </main>
    </>
  );
}

TripPlannerPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default TripPlannerPage;
