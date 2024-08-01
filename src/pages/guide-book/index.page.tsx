import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getGuideBookData } from "@/apis/api";
import { GUIDE_BOOK_KEYS } from "@/constants/queryKey";
import { useGetGuideBookData } from "@/hooks/useGetGuideBookData";

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
  const { fetchNextPage, hasNextPage, isLoading, data } = useGetGuideBookData();
  //   return <h1>여행 가이드북</h1>
  //   console.log(data);

  //   console.log(hasNextPage);

  return (
    <div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default GuideBookPage;
