import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [items, setItems] = useState();

  useEffect(() => {
    setItems(state.cart);
  });
  return (
    <div style={{width:'40%', margin:'auto', border:'1px solid black'}}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{backgroundColor:'black'}}>
            <TableRow>
              <TableCell style={{color:'#fff'}}>Product name</TableCell>
              <TableCell style={{color:'#fff'}} align="right">Price</TableCell>
              <TableCell style={{color:'#fff'}} align="right">Quantity</TableCell>
              <TableCell style={{color:'#fff'}} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.productName}
                  </TableCell>
                  <TableCell align="right">₹{item.price}</TableCell>
                  <TableCell align="right">{item.qty}</TableCell>
                  <TableCell align='right' onClick={()=>{
                    dispatch({
                      type:'REMOVE_FROM_CART',
                      id:item._id
                    })
                  }}><DeleteIcon /></TableCell>
                </TableRow>
              
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
