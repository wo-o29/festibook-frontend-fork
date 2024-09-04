import axios from "axios";

import {
  BookmarkFestivalType,
  BookmarkReviewType,
  GuideBookType,
} from "@/types";

import { instance, setInstance } from "./axios";

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

export const getBookmarkFestival = async (): Promise<
  BookmarkFestivalType[]
> => {
  const response = await axios.get("/bookmark/festival");

  return response.data;
};

export const getMyPageReview = async (): Promise<BookmarkReviewType[]> => {
  console.log("Asx");
  const response = await axios.get("/mypage/review");
  return response.data;
};
