import React, { useState } from 'react';
import { TimeFrame } from '../ui/TimeFrame/TimeFrame';
import { Table } from '../Table/Table';
import { useStockData } from '../../hooks/useStockData';
import { timeFrames } from '../ui/TimeFrame/data';

export const History = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrames);

  const stockTimeDate = selectedTimeFrame.filter((time) => time.selected);

  const { data, status } = useStockData(
    stockTimeDate[0].id,
    stockTimeDate[0].period,
    stockTimeDate[0].precision,
    stockTimeDate[0].startTime,
    stockTimeDate[0].endTime
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error!</p>;

  return (
    <div>
      <TimeFrame
        selectedTimeFrame={selectedTimeFrame}
        setSelectedTimeFrame={setSelectedTimeFrame}
      />
      <Table data={data} />
    </div>
  );
};
