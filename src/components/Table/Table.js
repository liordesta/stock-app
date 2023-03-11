import * as React from 'react';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './Table.module.css';

function createData(name, calories, fat, carbs, protein, test) {
  return { name, calories, fat, carbs, protein, test };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 7),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 3),
  createData('Eclair', 262, 16.0, 24, 6.0, 12),
  createData('Cupcake', 305, 3.7, 67, 4.3, 19),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 88),
];

export const Table = () => {
  return (
    <div className={classes.tableWrapper}>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} aria-label='table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='right'>High</TableCell>
              <TableCell align='right'>Low</TableCell>
              <TableCell align='right'>Open</TableCell>
              <TableCell align='right'>Close</TableCell>
              <TableCell align='right'>% Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
                <TableCell align='right'>{row.test}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
};
