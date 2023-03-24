import React, { useState, useEffect } from 'react';
import { Arrow } from '../ui/Arrow/Arrow';
import { dateFormatHeaderTable } from '../../utils/date';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <section
        className={`${classes.sectionWrapper} ${classes.companyDetails}`}
      >
        <div>
          <h2>Apple Inc</h2>
        </div>

        <span>
          As of:{' '}
          {data?.lastUpdate
            ? dateFormatHeaderTable(data?.lastUpdate, true)
            : '...'}
        </span>
      </section>

      <section className={classes.sectionWrapper}>
        <div className={classes.stockPriceWrapper}>
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

        {data?.change !== 0 && (
          <div
            className={`${classes.stockInfoWrapper} ${
              data?.change > 0 ? classes.isPositive : classes.isNegative
            }`}
          >
            <h4>{data?.change}</h4>
            <h4>({data?.percentChange}%)</h4>
          </div>
        )}
      </section>
    </div>
  );
};
