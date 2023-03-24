import { useQuery } from 'react-query';

export const useStockData = (id, period, precision, startTime, endTime) => {
  const queryKey = [`stockData-${id}`, period, precision, startTime, endTime];

  const fetchStockData = async () => {
    const apiKey = process.env.REACT_APP_STOCK_API_KEY;
    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/${period}/${precision}/${startTime}/${endTime}?sort=asc&limit=120&apiKey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    return data.results;
  };

  return useQuery(queryKey, fetchStockData, {
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
