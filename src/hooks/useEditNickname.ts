import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editNickname } from "@/apis/api";
import { USER_INFO_KEYS } from "@/constants/queryKey";
import { UserInfoType } from "@/types";

export const useEditNickname = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: Pick<UserInfoType, "nickname">) => editNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_INFO_KEYS.info() });
    },
  });

  return { mutate };
};
