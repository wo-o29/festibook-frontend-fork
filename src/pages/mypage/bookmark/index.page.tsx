import { ReactElement, Suspense } from "react";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBookmarkFestival } from "@/apis/api";
import SkeletonGrid from "@/components/Bookmark/Skeleton/SkeletonGrid";
import BackButton from "@/components/Button/BackButton";
import FestivalGrid from "@/components/Festival/Grid";
import HeaderLayout from "@/components/Layout/HeaderLayout";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

import * as S from "./styled";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: BOOKMARK_KEYS.festival(),
      queryFn: getBookmarkFestival,
    });

    return {
      props: { dehydrateState: dehydrate(queryClient) },
    };
  } catch (error) {
    return {
      props: { dehydrateState: null },
    };
  }
};

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
