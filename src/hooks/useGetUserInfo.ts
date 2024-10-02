import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/apis/api";
import { USER_INFO_KEYS } from "@/constants/queryKey";

export const useGetUserInfo = () => {
  const { data } = useQuery({
    queryKey: USER_INFO_KEYS.info(),
    queryFn: getUserInfo,
  });

  return { data };
};
