import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Orders from './Orders';
import Inventory from './Inventory';
import axios from 'axios';
const Admin = (props) =>{

  const [value, setValue] = React.useState(0);
  const [currentPage, setPage] = React.useState((
  <div>
      <Orders />
    </div>
  ))
  const useStyles = makeStyles((theme) => ({
    paper: {
      justifyContent: "center",
      color: "red",
      backgroundColor: "white",
    },
    hovered: {
      color: "white",
      backgroundColor: "red",
    },
    scroller: {
      flexGrow: "0",
    },
  }));


  const classes = useStyles();

  let categories = ['orders', 'inventory', 'completed orders']
  const getCategories = () => {
    axios.get("/categories").then((result) => {
      return result.data});
    };
  let mapTabs = categories.map((category) => {
    console.log(category);
    return (
      <Tab
        // onMouseEnter={() => {
        //   handleHover(category);
        // }}
        // onMouseLeave={() => {
        //   handleExit();
        // }}
        className={classes.paper}
        label={category}
      ></Tab>
    );
  });
  console.log(props)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // props.getProducts(categories[newValue]);
     if (categories[newValue] === 'orders'){
       let displayPage = (
         <div>
           <Orders />
         </div>
       )
       setPage(displayPage)
     } else if (categories[newValue] === 'inventory') {
      let displayPage = (
        <div>
          <Inventory getCategories={getCategories}/>
        </div>
      )
      setPage(displayPage)
     } else {
      setPage(null)
     }
  };

  return(
  <div >
  <div className={'admin-header'}>
        <Tabs
        classes={{ root: classes.paper, scroller: classes.scroller }}
        value={value}
        variant={"scrollable"}
        scrollButtons="auto"
        onChange={handleChange}
        centered
      >
        {mapTabs}
      </Tabs>
      </div>
      <div>
        {currentPage}
      </div>
  </div>
  )
}
export default Admin;