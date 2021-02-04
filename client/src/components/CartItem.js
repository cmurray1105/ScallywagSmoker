import React from 'react';
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '64px',
    display: 'flex',
    flexDirection: 'row'

  },
  media: {
    // flexDirection: 'row',
    // display: 'inline',
    // justifyContent: 'space-between',
    height: '64px',
    borderRadius: '15%',
  },
  wrapper: {
    // display: 'inline-flex',
    // alignItems: 'flex-start'
  },
  text: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    marginLeft: '25px',
    verticalAlign: 'middle',
    // display: 'inline-block'
  }
});
const CartItem = (props) =>{
  const classes = useStyles();

  console.log("CART ITEM ITEM", props.item)
  let currentProduct;
  for (let i = 0; i < props.products.length; i++){
    // console.log("product man", product)
    if (props.products[i].id === props.item.id){
      currentProduct = props.products[i]
  }
}
const handleDecrease = () =>{
  console.log("hit in cart item")
  props.decreaseQuantity(props.item.productInfo.product_name)
}
const handleIncrease = () =>{
  console.log("hit in cart item")
  props.increaseQuantity(props.item.productInfo.product_name)
}
console.log("CP", currentProduct)
return (


  <div className={classes.root}>
   <img
          className={classes.media}
          src={props.item.productInfo.image_url}
        />
        <h4 className={classes.text}> {props.item.productInfo.product_name} ${props.item.quantity * props.item.productInfo.price}</h4>
  <button className="value-button" id="decrease" onClick={handleDecrease}>-</button>
  {props.item.quantity}
  <button className="value-button" id="increase" onClick={handleIncrease} value="Increase Value">+</button>


  </div>


)
}
export default CartItem;