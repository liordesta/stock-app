import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import classes from './TimeFrame.module.css';

const CustomButtonGroup = styled(ButtonGroup)({
  '& .MuiButton-root': {
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  '& .MuiButtonSelectedTime': {
    textDecorationLine: 'underline',
    textUnderlineOffset: '10px',
  },
});

export const TimeFrame = ({ selectedTimeFrame, setSelectedTimeFrame }) => {
  const handleButtonClick = ({ id }) => {
    const updatedTimeFrames = selectedTimeFrame.map((timeFrame) => {
      if (timeFrame.id === id) {
        return { ...timeFrame, selected: true };
      } else {
        return { ...timeFrame, selected: false };
      }
    });

    setSelectedTimeFrame(updatedTimeFrames);
  };

  return (
    <div className={classes.timeFrameWrapper}>
      <CustomButtonGroup variant='string'>
        {selectedTimeFrame?.map((time) => (
          <Button
            key={time.id}
            className={time.selected ? 'MuiButtonSelectedTime' : ''}
            onClick={() => handleButtonClick(time)}
          >
            {time.label}
          </Button>
        ))}
      </CustomButtonGroup>
    </div>
  );
};
