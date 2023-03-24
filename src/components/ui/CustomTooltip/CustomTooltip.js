import React from 'react';
import { tooltipDate } from '../../../utils/date';
import classes from './CustomTooltip.module.css';

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className={classes.tooltipWrapper}>
        <p>Date/Time: {tooltipDate(payload[0].payload.t)}</p>
        <p>Close : {` ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
