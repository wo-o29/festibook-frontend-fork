export const dateFormat = (date: string, day: number) => {
  const [m, d] = date.split("-");
  return `${m}월 ${d}일, ${day}일차`;
};

export const durationFormat = (duration: number) => {
  const hour = Math.floor(duration / 60);
  const minute = duration % 60;
  return `${hour}시간 ${minute}분`;
};
