import { useQuery } from "@tanstack/react-query";

import { getBookmarkFestival } from "@/apis/api";
import { BOOKMARK_KEYS } from "@/constants/queryKey";

export const useGetBookmarkFestival = () => {
  const { data } = useQuery({
    queryKey: BOOKMARK_KEYS.festival(),
    queryFn: getBookmarkFestival,
  });

  return { data };
};
