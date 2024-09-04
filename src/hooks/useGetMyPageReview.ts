import { useQuery } from "@tanstack/react-query";

import { getMyPageReview } from "@/apis/api";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

export const useGetMyPageReview = () => {
  const { data } = useQuery({
    queryKey: BOOKMARK_KEYS.reviews(),
    queryFn: getMyPageReview,
  });

  return { data };
};
