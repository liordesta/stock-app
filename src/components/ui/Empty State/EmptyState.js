import React from 'react';
import noData from '../../../assets/no-data.png';
import classes from './EmptyState.module.css';

export const EmptyState = () => {
  return (
    <div className={classes.emptyContainer}>
      <div className={classes.emptyWrapper}>
        <img src={noData} alt='no data' />
        <h4>Oops! Seems like something went wrong.</h4>
        <p>
          The requested data is not available at the moment...
          <br />
          Please try again later
        </p>
      </div>
    </div>
  );
};
