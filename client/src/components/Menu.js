// import { Tabs, Tab } from "react-bootstrap-tabs";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// import AppBar from "@material-ui/core/AppBar";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Products from "./Products";
import CheckoutModal from './CheckoutModal'


function Menu(props) {
  const matches = useMediaQuery('(min-width:800px)');
  const [value, setValue] = React.useState(0);
  const [hovered, setHovered] = React.useState(null)
  const [currentVariant, setVariant] = React.useState('none');
  console.log("PROPPPP", props)
  const useStyles = makeStyles((theme) => ({
    paper: {
      justifyContent: "center",
      // flexGrow: 1,
      // width: "100%",
      color: 'red',
      // backgroundColor:  'rgb(245, 245, 245)'
      backgroundColor: 'white'
      // backgroundColor: theme.palette.background.paper,
    },
    hovered: {
      color: 'white',
      backgroundColor: 'red'
    },
    scroller: {
      flexGrow: "0"
    }
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getProducts(props.categories[newValue]);
  };
  const handleHover = (cat)=>{
    console.log("CATEGORY", cat)
    setHovered(cat)
  }
  const handleExit = ()=>{
    setHovered('')
  }


  // React.useEffect(()=>{
  // getCategories()})

  const classes = useStyles()
  // const categories = [
  //   "Meats",
  //   "Sides",
  //   "Combos",
  //   "Dessert",
  //   "Catering",
  //   "Gift Shop",
  // ];
  let mapTabs = (
    props.categories.map((category)=>{
      console.log(category)
      return (
      <Tab
      onMouseEnter={()=>{handleHover(category)}}
      onMouseLeave={() =>{handleExit()}}
      className={hovered=== category ? classes.hovered : classes.paper}
      label={category}>
      </Tab>
    )
    })
  )

  // if (!matches){
  //   setVariant('scrollable')
  //   // console.log(matches)
  // }

  return (
    <div >
      {/* <AppBar position="static" color="default" centered> */}
        <Tabs
        classes={{root: classes.paper, scroller: classes.scroller}}
        //  className="tab-content"
          value={value}
          variant={"scrollable"}
          scrollButtons="auto"
          onChange={handleChange}
          centered
        >
          {mapTabs}
        </Tabs>
      {/* </AppBar> */}
      {/* <div className="products-container"> */}

          <Products
            convertPriceToString={props.convertPriceToString}
            addToCart={props.addToCart}
            products={props.products}
            loaded={props.loaded}
            cartItems={props.cartItems}
          />
      {/* </div> */}
    </div>
  );
}

export default Menu;
