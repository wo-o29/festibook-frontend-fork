import { useMutation, useQueryClient } from "@tanstack/react-query";

import { withdrawUser } from "@/apis/api";
import { userInfoKey } from "@/constants/queryKey";

export const useWithdrawUser = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: withdrawUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: userInfoKey.info() });
    },
  });

  return { mutate };
};
