import { useQuery } from "@tanstack/react-query";

import { getBookmarkReview } from "@/apis/api";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

export const useGetBookmarkReview = () => {
  const { data } = useQuery({
    queryKey: BOOKMARK_KEYS.reviews(),
    queryFn: getBookmarkReview,
  });

  return { data };
};
