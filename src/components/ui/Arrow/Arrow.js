import React from 'react';
import { ReactComponent as ArrowIco } from '../../../assets/arrow.svg';
import classes from './Arrow.module.css';

export const Arrow = ({ state }) => {
  return (
    <div className={state === 'up' ? classes.up : classes.down}>
      <ArrowIco />
    </div>
  );
};
