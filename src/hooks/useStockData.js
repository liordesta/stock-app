import { useQuery } from 'react-query';

export const useStockData = (id, period, precision, startTime, endTime) => {
  const queryKey = [`stockData-${id}`, period, precision, startTime, endTime];

  const fetchStockData = async () => {
    const url = `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=${startTime}&EndTime=${endTime}%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    return data;
  };

  return useQuery(queryKey, fetchStockData, {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
