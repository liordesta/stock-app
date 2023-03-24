import { getDateRange } from '../../../utils/date';

const [dayStartTime, dayEndTime] = getDateRange('day');
const [monthStartTime, monthEndTime] = getDateRange('month');

export const timeFrames = [
  {
    id: 1,
    selected: true,
    label: '1 Minute',
    period: 1,
    precision: 'minute',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 2,
    selected: false,
    label: '5 Minutes',
    period: 5,
    precision: 'minute',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 3,
    selected: false,
    label: '1 Hour',
    period: 1,
    precision: 'minute',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 4,
    selected: false,
    label: '1 Week',
    period: 1,
    precision: 'day',
    startTime: monthStartTime,
    endTime: monthEndTime,
  },
];
