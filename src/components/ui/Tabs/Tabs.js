import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { TabPanel } from './TabPanel';
import { History } from '../../History/History';
import { Overview } from '../../Overview/Overview';
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
