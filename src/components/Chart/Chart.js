import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CustomTooltip } from '../ui/CustomTooltip/CustomTooltip';
import { useAppContext } from '../../contexts/AppContext';
import { dateBottomChartTick } from '../../utils/date';
import classes from './Chart.module.css';

export const Chart = () => {
  const { apiData, selectedTimeFrame } = useAppContext();

  const selectedTime = selectedTimeFrame.filter((time) => time.selected)[0];

  let minYValue, maxYValue;

  if (apiData) {
    minYValue = Math.min(...apiData?.map((item) => item.l));
    maxYValue = Math.max(...apiData?.map((item) => item.h));
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
            dataKey='t'
            tickFormatter={(date) => dateBottomChartTick(date, selectedTime)}
            interval='preserveStartEnd'
          />
          <YAxis orientation='right' domain={[minYValue, maxYValue]} />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Area type='monotone' dataKey='c' stroke='#459cf8' fill='#e2ecfa' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
