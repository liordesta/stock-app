import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import { CustomTooltip } from '../ui/CustomTooltip/CustomTooltip';
import { useAppContext } from '../../contexts/AppContext';
import classes from './Chart.module.css';

export const Chart = () => {
  const { apiData, selectedTimeFrame } = useAppContext();

  const selectedTime = selectedTimeFrame.filter((time) => time.selected)[0];

  let minYValue, maxYValue;

  const dateTick = (date) => {
    if (
      selectedTime.label === '1 Minute' ||
      selectedTime.label === '5 Minutes' ||
      selectedTime.label === '1 Hour'
    ) {
      return moment(new Date(date)).format('HH:mm').toString();
    }
    return moment(new Date(date)).format('DD-MMM').toString();
  };

  if (apiData) {
    minYValue = Math.min(...apiData?.map((item) => item.Low));
    maxYValue = Math.max(...apiData?.map((item) => item.High));
  }

  return (
    <div className={classes.chartWrapper}>
      <ResponsiveContainer width='100%' height='100%' aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={apiData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey='Date'
            tickFormatter={(date) => dateTick(date)}
            interval='preserveStartEnd'
          />
          <YAxis orientation='right' domain={[minYValue, maxYValue]} />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Area
            type='monotone'
            dataKey='Close'
            stroke='#459cf8'
            fill='#e2ecfa'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
