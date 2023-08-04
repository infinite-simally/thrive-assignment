export const daysBetweenDates = (startDate: Date | string) => {
  const endDate = new Date();
  const diffInMs = endDate.valueOf() - new Date(startDate).valueOf();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays.toFixed(0);
};
