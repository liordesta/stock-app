import React, { useState } from 'react';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import classes from './Table.module.css';
import { useAppContext } from '../../contexts/AppContext';
import { formatDate } from '../../utils/formatDate';

export const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('date');
  const [order, setOrder] = useState('desc');
  const { apiData } = useAppContext();

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (column) => {
    if (orderBy === column) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setOrderBy(column);
      setOrder('asc');
    }
  };

  const transformedData = apiData.map((stock) => {
    return {
      id: stock.Date,
      date: formatDate(new Date(stock.Date)),
      high: stock.High,
      low: stock.Low,
      open: stock.Open,
      close: stock.Close,
      change: 'TBD',
    };
  });

  const sortedRows = transformedData.sort((a, b) => {
    const isAsc = order === 'asc';
    switch (orderBy) {
      case 'date':
        return isAsc
          ? a.date.localeCompare(b.date)
          : b.date.localeCompare(a.date);
      case 'high':
        return isAsc ? a.high - b.high : b.high - a.high;
      case 'low':
        return isAsc ? a.low - b.low : b.low - a.low;
      case 'open':
        return isAsc ? a.open - b.open : b.open - a.open;
      case 'close':
        return isAsc ? a.close - b.close : b.close - a.close;
      default:
        return 0;
    }
  });

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = sortedRows.slice(startIndex, endIndex);

  return (
    <div className={classes.tableWrapper}>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} aria-label='table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={order}
                  onClick={() => handleSort('date')}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={orderBy === 'high'}
                  direction={order}
                  onClick={() => handleSort('high')}
                  align='right'
                >
                  High
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={orderBy === 'low'}
                  direction={order}
                  onClick={() => handleSort('low')}
                  align='right'
                >
                  Low
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={orderBy === 'open'}
                  direction={order}
                  onClick={() => handleSort('open')}
                  align='right'
                >
                  Open
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>
                <TableSortLabel
                  active={orderBy === 'close'}
                  direction={order}
                  onClick={() => handleSort('close')}
                  align='right'
                >
                  Close
                </TableSortLabel>
              </TableCell>
              <TableCell align='right'>% Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.date}
                </TableCell>
                <TableCell align='right'>{row.high}</TableCell>
                <TableCell align='right'>{row.low}</TableCell>
                <TableCell align='right'>{row.open}</TableCell>
                <TableCell align='right'>{row.close}</TableCell>
                <TableCell align='right'>{row.change}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={transformedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};
