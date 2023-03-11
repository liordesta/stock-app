import React, { useState, useEffect } from 'react';
import { Arrow } from '../ui/Arrow/Arrow';
import { formatDate } from '../../utils/formatDate';
import classes from './Header.module.css';

export const Header = () => {
  const [data, setData] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(
      'wss://wstest.fxempire.com?token=btctothemoon'
    );

    setWs(socket);

    socket.addEventListener('open', () => {
      const subscribeMessage = { type: 'SUBSCRIBE', instruments: ['s-aapl'] };
      socket.send(JSON.stringify(subscribeMessage));
    });

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      setData(data['s-aapl']);
    });

    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        const unSubscribeMessage = {
          type: 'UNSUBSCRIBE',
          instruments: ['s-aapl'],
        };
        ws.send(JSON.stringify(unSubscribeMessage));
        ws.close();
      }
    };
  }, []);

  //console.log('data', data);

  return (
    <div className={classes.container}>
      <section
        className={`${classes.sectionWrapper} ${classes.companyDetails}`}
      >
        <div>
          <h2>Apple Inc</h2>
        </div>

        <span>
          As of: {data?.lastUpdate ? formatDate(data?.lastUpdate) : '...'}
        </span>
      </section>

      <section className={classes.sectionWrapper}>
        <div className={classes.stockPriceWrapper}>
          {console.log(data?.change)}
          {data?.change ? (
            data?.change > 0 ? (
              <Arrow state={'up'} />
            ) : (
              <Arrow state={'down'} />
            )
          ) : (
            ''
          )}
          <h2>{data?.last ? data?.last : '...'}</h2>
        </div>

        <div
          className={`${classes.stockInfoWrapper} ${
            data?.change > 0 ? classes.isPositive : classes.isNegative
          }`}
        >
          {data?.change && (
            <>
              <h4>{data?.change}</h4>
              <h4>({data?.percentChange}%)</h4>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
