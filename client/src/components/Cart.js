import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CheckoutModal from './CheckoutModal'

const Cart = (props) =>{
  let priceString = props.total.toString();
  if (priceString.includes(".")) {
    if (priceString.split(".")[1].length === 1) {
      priceString += "0";
    }
    if (priceString.split(".")[1].length > 2) {
      priceString =
        priceString.split(".")[0] +
        "." +
        priceString.split(".")[1].slice(0, 2);
    }
  } else {
    priceString += ".00";
  }
  return(
  <div>
  <CheckoutModal clearOrder={props.clearOrder} total={props.total} products={props.products} cartItems={props.cartItems}/>
  Total Due:
  ${priceString}
  </div>

  )
}
export default Cart;