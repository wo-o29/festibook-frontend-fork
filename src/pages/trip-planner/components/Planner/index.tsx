import Image from "next/image";

import { PlannerScheduleType } from "@/types";
import { dateFormat, durationFormat } from "@/utils/dateFormat";
import scheduleResult from "@/utils/scheduleResult";

import * as S from "./styled";

interface TripPlannerProps {
  data: PlannerScheduleType[];
}

function TripPlanner({ data }: TripPlannerProps) {
  return (
    <S.Container>
      {data.map((info, idx) => {
        const { date, schedule } = info;
        const { startTime, endTime, startLocation, endLocation, total } =
          scheduleResult(schedule);
        return (
          <S.DateBox key={idx}>
            <S.Date>{dateFormat(date, idx + 1)}</S.Date>
            <S.ContentBox>
              <S.Info>
                <S.InfoBox>
                  <S.InfoTitle>{idx + 1}일차 여행 정보</S.InfoTitle>
                  <S.InfoTime>
                    <Image
                      src="/icons/clock.svg"
                      alt="시계 아이콘"
                      width={16}
                      height={16}
                    />
                    {`${startTime} ~ ${endTime}`}
                  </S.InfoTime>
                  <S.InfoDuration>
                    <Image
                      src="/icons/clock.svg"
                      alt="시계 아이콘"
                      width={16}
                      height={16}
                    />
                    {durationFormat(total.duration)}
                  </S.InfoDuration>
                  <S.InfoLocation>
                    <Image
                      src="/icons/marker.svg"
                      alt="지도 마커 아이콘"
                      width={20}
                      height={20}
                    />
                    {`${startLocation} ➔ ${endLocation}`}
                  </S.InfoLocation>
                  <S.InfoPrice>
                    <Image
                      src="/icons/price.svg"
                      alt="금액 아이콘"
                      width={18}
                      height={18}
                    />
                    {`${total.price}만원`}
                  </S.InfoPrice>
                </S.InfoBox>
              </S.Info>
              <S.UList>
                {schedule.map((item) => {
                  const { time, duration, location, price, description } = item;
                  return (
                    <S.ListItem key={time}>
                      <S.HeadBox>
                        <S.Time>
                          <Image
                            src="/icons/clock.svg"
                            alt="시계 아이콘"
                            width={16}
                            height={16}
                          />
                          {time}
                        </S.Time>
                        <S.Duration>{duration}</S.Duration>
                        <S.Location>
                          <Image
                            src="/icons/marker.svg"
                            alt="지도 마커 아이콘"
                            width={20}
                            height={20}
                          />
                          {location.name}
                        </S.Location>
                        <S.Price>
                          <Image
                            src="/icons/price.svg"
                            alt="금액 아이콘"
                            width={16}
                            height={16}
                          />
                          {price.price}
                        </S.Price>
                      </S.HeadBox>
                      <S.Description>{description}</S.Description>
                    </S.ListItem>
                  );
                })}
              </S.UList>
            </S.ContentBox>
          </S.DateBox>
        );
      })}
    </S.Container>
  );
}

export default TripPlanner;
