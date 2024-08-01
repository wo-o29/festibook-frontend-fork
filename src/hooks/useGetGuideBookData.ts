import { useInfiniteQuery } from "@tanstack/react-query";

import { getGuideBookData } from "@/apis/api";
import { GUIDE_BOOK_KEYS } from "@/constants/queryKey";

export const useGetGuideBookData = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: GUIDE_BOOK_KEYS.lists(),
      queryFn: ({ pageParam }) => getGuideBookData(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const count = allPages.reduce((acc, cur) => acc + cur.currentCount, 0);

        if (count < lastPage.totalCount) {
          const pageParam = lastPage.page + 1;
          return pageParam;
        }

        return null;
      },
    });

  return { data, fetchNextPage, hasNextPage, isLoading, isError };
};
