import { PlannerScheduleListType } from "@/types";

const scheduleResult = (schedule: PlannerScheduleListType[]) => {
  const startTime = schedule[0].time;
  const endTime = schedule[schedule.length - 1].time;
  const startLocation = schedule[0].location.name;
  const endLocation = schedule[schedule.length - 1].location.name;
  const total = schedule.reduce(
    (acc, cur) => {
      const money = Number(cur.price.price.split("만원")[0]);
      const time = Number(cur.duration.split("분")[0]);
      acc.price += money;
      acc.duration += time;
      return acc;
    },
    { price: 0, duration: 0 },
  );

  return { startTime, endTime, startLocation, endLocation, total };
};

export default scheduleResult;
