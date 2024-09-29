import { http, HttpResponse } from "msw";

import { bookmarkFestivalData } from "./bookmark/festivals";
import { bookmarkReviewData } from "./bookmark/reviews";

export const handlers = [
  // 축제 즐겨찾기
  http.get("/bookmark/festival", () => {
    return HttpResponse.json(bookmarkFestivalData);
  }),

  // 축제 리뷰
  http.get("/mypage/review", () => {
    return HttpResponse.json(bookmarkReviewData);
  }),
];
