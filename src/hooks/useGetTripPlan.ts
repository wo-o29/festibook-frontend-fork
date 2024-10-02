import { useMutation } from "@tanstack/react-query";

import { getTripPlan } from "@/apis/api";
import { PlannerFormType } from "@/types";

export const useGetTripPlan = () => {
  const { data, isPending, mutate } = useMutation({
    mutationFn: (formData: PlannerFormType) => getTripPlan(formData),
  });

  return { data, isPending, mutate };
};
