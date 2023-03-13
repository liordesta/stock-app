import React from 'react';
import { TimeFrame } from '../ui/TimeFrame/TimeFrame';
import { Chart } from '../Chart/Chart';
import { useAppContext } from '../../contexts/AppContext';

export const Overview = () => {
  const { apiStatus } = useAppContext();

  if (apiStatus === 'loading') return <p>Loading...</p>;
  if (apiStatus === 'error') return <p>Error!</p>;

  return (
    <div>
      <TimeFrame />
      <Chart />
    </div>
  );
};
