import { useEffect, useRef } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getGuideBookData } from "@/apis/api";
import { GUIDE_BOOK_KEYS } from "@/constants/queryKey";

export const useGetGuideBookData = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
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

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          return;
        }

        fetchNextPage();
      },
      { threshold: 0.5 },
    );

    if (!observerRef.current) {
      return;
    }

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetching, isLoading]);

  return {
    guideBookList: data?.pages,
    hasNextPage,
    isLoading,
    isFetching,
    observerRef,
  };
};
