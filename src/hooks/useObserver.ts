import { useEffect, useRef } from "react";

import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

export const useObserver = <TData, TError>(
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<TData, TError>>,
) => {
  const refElement = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0 },
    );

    if (refElement.current) {
      observer.observe(refElement.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage]);

  return refElement; // 관찰 대상의 ref를 return
};
