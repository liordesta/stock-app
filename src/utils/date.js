import moment from 'moment';

const dateFormatApiReq = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDateRange = (type) => {
  const today = new Date();
  let startDate, endDate;

  if (type === 'day') {
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    startDate = dateFormatApiReq(yesterday);
    endDate = dateFormatApiReq(today);
  } else if (type === 'month') {
    const prevMonth = new Date(today);
    prevMonth.setMonth(today.getMonth() - 1);
    startDate = dateFormatApiReq(prevMonth);
    endDate = dateFormatApiReq(today);
  } else {
    throw new Error('Invalid argument: type must be "day" or "month"');
  }

  return [startDate, endDate];
};

export const dateFormatHeaderTable = (date, withTime) => {
  const getDate = moment.utc(date).local();
  return getDate.format(`MMM DD, YYYY ${withTime ? 'HH:mm [UTC]' : ''}`);
};

export const tooltipDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}`;
  return formattedDate;
};

export const dateBottomChartTick = (date, selectedTime) => {
  if (
    selectedTime.label === '1 Minute' ||
    selectedTime.label === '5 Minutes' ||
    selectedTime.label === '1 Hour'
  ) {
    return moment(new Date(date)).format('HH:mm').toString();
  }
  return moment(new Date(date)).format('DD-MMM').toString();
};
