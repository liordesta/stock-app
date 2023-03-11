import moment from 'moment';

export const formatDate = (date) => {
  const getDate = moment.utc(date).local();
  return getDate.format('MMM DD, YYYY HH:mm [UTC]');
};
