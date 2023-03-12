import { calculateDateDiff } from '../../../utils/calculateDateDiff';

const [dayStartTime, dayEndTime] = calculateDateDiff('day');
const [monthStartTime, monthEndTime] = calculateDateDiff('month');

export const timeFrames = [
  {
    id: 1,
    selected: true,
    label: '1 Minute',
    period: 1,
    precision: 'Minutes',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 2,
    selected: false,
    label: '5 Minutes',
    period: 5,
    precision: 'Minutes',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 3,
    selected: false,
    label: '1 Hour',
    period: 1,
    precision: 'Hours',
    startTime: dayStartTime,
    endTime: dayEndTime,
  },
  {
    id: 4,
    selected: false,
    label: '1 Week',
    period: 30,
    precision: 'Minutes',
    startTime: monthStartTime,
    endTime: monthEndTime,
  },
];
