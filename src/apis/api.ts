import { guideBookInstance } from "./axios";

export const getGuideBookData = async (pageParam: number) => {
  const response = await guideBookInstance.get(
    `/15123631/v1/uddi:33264f0a-158f-4a5d-95cd-99c740c8a097?page=${pageParam}&perPage=20&serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_API_KEY}`,
  );
  return response.data;
};
