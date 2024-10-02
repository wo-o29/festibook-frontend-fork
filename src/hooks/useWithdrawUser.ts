import { useMutation, useQueryClient } from "@tanstack/react-query";

import { withdrawUser } from "@/apis/api";
import { USER_INFO_KEYS } from "@/constants/queryKey";

export const useWithdrawUser = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: withdrawUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: USER_INFO_KEYS.info() });
    },
  });

  return { mutate };
};
