// import { Tabs, Tab } from "react-bootstrap-tabs";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
// import a11yProps from "./a11yProps";
import Grid from '@material-ui/core/Grid';
import Products from "./Products";
import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
}));
function Menu(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getProducts(categories[newValue])
  };

  const categories = ['Meats', 'Sides', 'Combos', 'Dessert', 'Catering', 'Gift Shop']
  return (

    <div>
      <AppBar position="static" color="default" centered>
        <Tabs
          className="tab-content"
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}


        >
          <Tab className="menuTab" label="Meats">
          </Tab>
          <Tab
            className="menuTab"
            label="Sides"
          >
          </Tab>
          <Tab
            className="menuTab"
            label="Combos"
          >

          </Tab>
          <Tab
            className="menuTab"
            eventKey="Dessert"
            title="Dessert"
            label="Dessert"
          >

          </Tab>
          <Tab
            className="menuTab"
            eventKey="Catering"
            title="Catering"
            label="Catering"
          >

          </Tab>
          <Tab
            className="menuTab"
            eventKey="Gift Shop"
            title="Gift Shop"
            label="Gift Shop"
          >
          </Tab>
        </Tabs>
      </AppBar>
      <div className="products-container">
      <Grid container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center">
      <Products
              addToCart={props.addToCart}
              products={props.products}
              loaded={props.loaded}
              cartItems={props.cartItems}
            />
      </Grid>
            </div>
    </div>
  );
}

export default Menu;
