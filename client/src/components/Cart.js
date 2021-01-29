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
  let itemMap = null;
  if (props.cartItems){
    console.log(Object.keys(props.cartItems), "item length")
    let selectedItems = Object.keys(props.cartItems);
    console.log("products", props.products, "selected Items", typeof selectedItems[0])
    itemMap = selectedItems.map((item)=>(
      <div>
        {item}: $
      </div>
    ))
  }
//   React.useEffect(()=>{
  // props.cartItems.forEach((item)=>{
  //   console.log("cart item", item)

//   })
// })
  return(
  <div>
  <CheckoutModal clearOrder={props.clearOrder} priceString={priceString} total={props.total} products={props.products} cartItems={props.cartItems}/>
  Total Due:
  ${priceString}
  {itemMap}


  </div>

  )
}
export default Cart;