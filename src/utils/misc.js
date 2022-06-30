export const formattedValue = (value) => {
  if (value >= 1000) {
    return Math.round(value / 100) / 10 + "k";
  }

  return value;
};
