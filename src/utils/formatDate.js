import moment from 'moment';

export const formatDate = (date, withTime) => {
  const getDate = moment.utc(date).local();
  return getDate.format(`MMM DD, YYYY ${withTime ? 'HH:mm [UTC]' : ''}`);
};

export const tooltipDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();

  return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day} ${
    hour < 10 ? `0${hour}` : hour
  }:${minute < 10 ? `0${minute}` : minute}`;
};
