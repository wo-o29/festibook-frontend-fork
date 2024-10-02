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

export type oauth2Type = "naver" | "kakao" | "google";

export interface UserInfoType {
  id: number;
  nickname: string;
  platform: oauth2Type;
}

export interface BookmarkFestivalType {
  eventId: number;
  title: string;
  address1: string;
  startDate: string;
  endDate: string;
  thumbnailUrl: string;
}

export interface BookmarkReviewType {
  id: number;
  userId: number;
  nickname: string;
  content: string;
  eventId: number;
  eventName: string;
  createdAt: string;
}

export interface PlannerFormType {
  departureLocation: string;
  arrivalLocation: string;
  departureDate: string;
  arrivalDate: string;
  numberOfPeople: number;
  travelIntensity: string;
  totalBudget: number;
  mealCount: number;
}

export interface ItineraryType {
  itinerary: PlannerScheduleType[];
}
export interface PlannerScheduleType {
  date: string;
  schedule: PlannerScheduleListType[];
}

export interface PlannerScheduleListType {
  time: string;
  duration: string;
  location: {
    name: string;
    administrativeArea: string;
    detailedAddress: string;
    longitude: string;
    latitude: string;
  };
  price: {
    currency: string;
    price: string;
  };
  description: string;
}
