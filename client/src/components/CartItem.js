import React from 'react';
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '64px',
    width: '400px',

  },
  media: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
    borderRadius: '15%',
  },
  wrapper: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  },
  text: {
    flexDirection: 'row',
    // justifyContent: 'center',
    verticalAlign: 'middle'
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
console.log("CP", currentProduct)
return (

  <div className='cart-item-entry'>
  <div className={classes.root}>
  <div className={classes.wrapper}>
   <img
          className={classes.media}
          src={props.item.productInfo.image_url}
        />
        <div className={classes.text}>
        <h4 className={classes.text}>{props.item.quantity} x {props.item.productInfo.product_name} ${props.item.quantity * props.item.productInfo.price}</h4>
         </div>
      </div>
  </div>
  <hr/>
  </div>

)
}
export default CartItem;