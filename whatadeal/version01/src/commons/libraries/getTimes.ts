export const getTimes = (value: string) => {
  const date = new Date(value);
  const now = new Date();
  const times = now.getTime() - date.getTime();
  const tt = times / 1000 / 60 / 60;
  if (tt > 24) {
    return Math.floor(tt / 24) + "일 전";
  } else {
    return Math.floor(tt) + "시간 전";
  }
};
