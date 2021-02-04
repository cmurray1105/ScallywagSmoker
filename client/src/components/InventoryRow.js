import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function InventoryRow(props) {
  const row = props.row
  console.log("ROW", row)
  const classes = useRowStyles();
  return (
<>
<TableRow className={classes.root}>
<TableCell component="th" scope="row">{row.product_name}</TableCell>
<TableCell align="right">{row.quantity}</TableCell>
<TableCell align="right">{row.price}</TableCell>
</TableRow>
</>
  )
}
export default InventoryRow;