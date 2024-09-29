import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyPageReview } from "@/apis/api";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

export const useGetMyPageReview = () => {
  const { data } = useSuspenseQuery({
    queryKey: BOOKMARK_KEYS.reviews(),
    queryFn: getMyPageReview,
  });

  return { data };
};
