import moment from 'moment';

export const formatDate = (date, withTime) => {
  const getDate = moment.utc(date).local();
  return getDate.format(`MMM DD, YYYY ${withTime ? 'HH:mm [UTC]' : ''}`);
};
