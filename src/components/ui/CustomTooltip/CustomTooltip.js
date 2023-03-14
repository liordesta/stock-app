import React from 'react';
import { tooltipDate } from '../../../utils/formatDate';
import classes from './CustomTooltip.module.css';

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className={classes.tooltipWrapper}>
        <p>Date/Time: {tooltipDate(label)}</p>
        <p>Close : {` ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
