export interface GuideBookDataListType {
  제목: string;
  제작처: string;
  "지역(시_도)": string;
  "지역(시_군_구)": string;
  "가이드북 링크": string;
}

export interface GuideBookType {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: GuideBookDataListType[];
}

export interface BookmarkFestivalType {
  id: number;
  title: string;
  region: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  isHolding: boolean;
  isBookmarked: boolean;
}

export interface BookmarkReviewType {
  id: number;
  review: string;
  title: string;
  reviewDate: string;
}
