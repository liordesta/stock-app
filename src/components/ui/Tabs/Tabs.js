import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { TabPanel } from './TabPanel';
import { History } from '../../History/History';
import { Overview } from '../../Overview/Overview';
import { useAppContext } from '../../../contexts/AppContext';
import { useStockData } from '../../../hooks/useStockData';
import { a11yProps } from './helpers';
import classes from './Tabs.module.css';

const CustomTabs = styled(MuiTabs)({
  '& .MuiTab-root': {
    textTransform: 'capitalize',
  },
});

export const Tabs = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  const { selectedTimeFrame, setApiData, setApiStatus } = useAppContext();
  const stockTimeDate = selectedTimeFrame?.filter((time) => time.selected);
  const { data, status } = useStockData(
    stockTimeDate[0].id,
    stockTimeDate[0].period,
    stockTimeDate[0].precision,
    stockTimeDate[0].startTime,
    stockTimeDate[0].endTime
  );

  useEffect(() => {
    setApiData(data);
    setApiStatus(status);
  }, [data, setApiData, setApiStatus, status]);

  return (
    <div className={classes.tabsContainer}>
      <div>
        <CustomTabs
          value={tab}
          onChange={handleChange}
          aria-label='tabs options'
        >
          <Tab label='Overview' {...a11yProps(0)} />
          <Tab label='History' {...a11yProps(1)} />
        </CustomTabs>
      </div>
      <TabPanel value={tab} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <History />
      </TabPanel>
    </div>
  );
};
