// import { Tabs, Tab } from "react-bootstrap-tabs";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import a11yProps from "./a11yProps";

import Products from "./Products";
import TabPanel from "./TabPanel";



function Menu(props) {

  const [value, setValue] = React.useState(0);
  const [hovered, setHovered] = React.useState(null)
  const useStyles = makeStyles((theme) => ({
    paper: {
      // flexGrow: 1,
      // width: "100%",
      color: 'red',
      backgroundColor: 'white'
      // backgroundColor: theme.palette.background.paper,
    },
    hovered: {
      color: 'white',
      backgroundColor: 'red'
    }
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getProducts(categories[newValue]);
  };
  const handleHover = (cat)=>{
    console.log("CATEGORY", cat)
    setHovered(cat)
  }
  const handleExit = ()=>{
    setHovered('')
  }

  const classes = useStyles()
  const categories = [
    "Meats",
    "Sides",
    "Combos",
    "Dessert",
    "Catering",
    "Gift Shop",
  ];
  let mapTabs = (
    categories.map((category)=>{
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
  return (
    <div >
      <AppBar position="static" color="default" centered>
        <Tabs
         className="tab-content"
          value={value}
          // variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
        >
          {mapTabs}
        </Tabs>
      </AppBar>
      <div className="products-container">

          <Products
            addToCart={props.addToCart}
            products={props.products}
            loaded={props.loaded}
            cartItems={props.cartItems}
          />
      </div>
    </div>
  );
}

export default Menu;
