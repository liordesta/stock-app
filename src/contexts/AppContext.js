import { createContext, useContext, useState } from 'react';
import { timeFrames } from '../components/ui/TimeFrame/data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrames);
  const [apiData, setApiData] = useState(null);
  const [apiStatus, setApiStatus] = useState(null);

  const state = {
    selectedTimeFrame,
    setSelectedTimeFrame,
    apiData,
    setApiData,
    apiStatus,
    setApiStatus,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
