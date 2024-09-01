import { ReactElement } from "react";

import HeaderLayout from "@/components/Layout/HeaderLayout";

import Bookmark from "./components/Bookmark";
import Planner from "./components/Planner";
import Profile from "./components/Profile";
import MyPageReview from "./components/Review";
import * as S from "./styled";

function MyPage() {
  return (
    <S.Container>
      <S.Box>
        <MyPageReview />
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
