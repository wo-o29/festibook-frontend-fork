import { ReactElement } from "react";

import HeaderLayout from "@/components/Layout/HeaderLayout";

import Bookmark from "./Components/Bookmark";
import Planner from "./Components/Planner";
import Profile from "./Components/Profile";
import Review from "./Components/Review";
import * as S from "./styled";

function MyPage() {
  return (
    <S.Container>
      <S.Box>
        <Review />
        <Profile />
      </S.Box>
      <Bookmark />
      <Planner />
    </S.Container>
  );
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default MyPage;
