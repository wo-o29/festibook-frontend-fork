import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getGuideBookData } from "@/apis/api";
import Loading from "@/components/Loading";
import { GUIDE_BOOK_KEYS } from "@/constants/queryKey";
import { useGetGuideBookData } from "@/hooks/useGetGuideBookData";

import GuideBookItem from "./components/GuideBookItem";
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
  const { hasNextPage, guideBookList, isLoading, isFetching, observerRef } =
    useGetGuideBookData();

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>여행 가이드북</S.Title>
        <S.Line />
      </S.TitleBox>
      <S.CountBox>{`총 ${guideBookList ? guideBookList[0].totalCount : 0}건`}</S.CountBox>
      {guideBookList && guideBookList.length > 0 ? (
        <S.ListBox>
          {guideBookList.map((list) =>
            list.data.map((data) => (
              <GuideBookItem key={data.제목} data={data} />
            )),
          )}
          {hasNextPage && !isFetching && <S.Observer ref={observerRef} />}
        </S.ListBox>
      ) : (
        <S.EmptyBox>
          <S.LogoImage
            src="/icons/logo.svg"
            width={400}
            height={400}
            alt="로고 이미지"
          />
          가이드북 데이터가 없습니다.
        </S.EmptyBox>
      )}
    </S.Container>
  );
}

export default GuideBookPage;
