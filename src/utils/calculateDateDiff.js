function getDateRange(type) {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() - 1);
  const startDate = new Date(today);
  if (type === 'day') {
    startDate.setDate(today.getDate() - 2);
  } else {
    startDate.setDate(today.getDate() - 1);
    startDate.setMonth(today.getMonth() - 1);
  }

  return [startDate.toLocaleDateString(), endDate.toLocaleDateString()];
}

export const calculateDateDiff = (type) => {
  return getDateRange(type);
};
