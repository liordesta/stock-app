import React from 'react';
import { TimeFrame } from '../ui/TimeFrame/TimeFrame';
import { Table } from '../Table/Table';
import { useAppContext } from '../../contexts/AppContext';

export const History = () => {
  const { apiStatus } = useAppContext();

  if (apiStatus === 'loading') return <p>Loading...</p>;
  if (apiStatus === 'error') return <p>Error!</p>;

  return (
    <div>
      <TimeFrame />
      <Table />
    </div>
  );
};
