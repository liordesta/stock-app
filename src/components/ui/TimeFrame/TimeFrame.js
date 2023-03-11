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
});

export const TimeFrame = () => {
  const handleButtonClick = () => {};
  return (
    <div className={classes.timeFrameWrapper}>
      <CustomButtonGroup variant='string'>
        <Button onClick={() => handleButtonClick(0)}>1 Minute</Button>
        <Button onClick={() => handleButtonClick(0)}>5 Minutes</Button>
        <Button onClick={() => handleButtonClick(0)}>1 Hour</Button>
        <Button onClick={() => handleButtonClick(0)}>1 Week</Button>
      </CustomButtonGroup>
    </div>
  );
};
