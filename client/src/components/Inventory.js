import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InventoryRow from './InventoryRow'
import AddInventory from './AddInventory'
const Inventory = (props) =>{
const [inventory, setInventory] = React.useState([])

React.useEffect(() => {
  // Update the document title using the browser API
  getInventory()
}, []);

const getInventory = () =>{
  axios.get('/inventory')
  .then((result) => {
    setInventory(result.data)
    console.log("INV", result.data)
  })



}
return(
<div>
<div className={'header'}>

</div>
<div>
<TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Product </TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((row) => (
              <InventoryRow row={row} />
            ))}
          </TableBody>

        </Table>
      </TableContainer>
</div>
<AddInventory getCategories={props.categories} />
</div>
)
}
export default Inventory;