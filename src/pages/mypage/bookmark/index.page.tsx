import { ReactElement, Suspense } from "react";

import BackButton from "@/components/Button/BackButton";
import FestivalGrid from "@/components/Festival/Grid";
import HeaderLayout from "@/components/Layout/HeaderLayout";

import * as S from "./styled";
import SkeletonGrid from "../components/Bookmark/Skeleton/Grid";

function BookmarkPage() {
  return (
    <S.Container>
      <S.Box>
        <BackButton />
        <S.Title>즐겨찾기 한 축제 목록</S.Title>
      </S.Box>
      <Suspense fallback={<SkeletonGrid count={8} />}>
        <FestivalGrid />
      </Suspense>
    </S.Container>
  );
}

BookmarkPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};
export default BookmarkPage;
