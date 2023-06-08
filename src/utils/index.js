export const sliceArray = (arr, start, end) => {
  return arr.slice(start, end);
};

export const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60); // Get the whole number of hours
  const remainingMinutes = minutes % 60; // Get the remaining minutes

  return `${hours} hours ${remainingMinutes} minutes`;
};
