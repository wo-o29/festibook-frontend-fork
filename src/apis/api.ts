import { GuideBookType, oauth2Type } from "@/types";

import { setInstance, instance } from "./axios";

export const getGuideBookData = async (
  pageParam: number,
): Promise<GuideBookType> => {
  const response = await setInstance(
    process.env.NEXT_PUBLIC_GUIDE_BOOK_API_BASE_URL!,
  ).get(
    `/15123631/v1/uddi:33264f0a-158f-4a5d-95cd-99c740c8a097?page=${pageParam}&perPage=20&serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_API_KEY}`,
  );
  return response.data;
};

export const oauth2Login = async (platform: oauth2Type) => {
  const response = instance.get(`/oauth2/authorization/${platform}`);
};
