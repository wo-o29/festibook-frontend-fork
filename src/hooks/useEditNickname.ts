import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editNickname } from "@/apis/api";
import { userInfoKey } from "@/constants/queryKey";
import { UserInfoType } from "@/types";

export const useEditNickname = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: UserInfoType) => editNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userInfoKey.info() });
    },
  });

  return { mutate };
};
