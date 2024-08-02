import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getGuideBookData } from "@/apis/api";
import { GUIDE_BOOK_KEYS } from "@/constants/queryKey";
import { useGetGuideBookData } from "@/hooks/useGetGuideBookData";

import * as S from "./styled";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: GUIDE_BOOK_KEYS.lists(),
      queryFn: () => getGuideBookData(1),
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

function GuideBookPage() {
  const { fetchNextPage, hasNextPage, guideBookList } = useGetGuideBookData();

  if (!guideBookList) {
    return null;
  }

  return (
    <>
      <S.Title>여행 가이드북</S.Title>
    </>
  );
}

export default GuideBookPage;
