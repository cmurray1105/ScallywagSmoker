import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Orders from './Orders';
import Inventory from './Inventory';
import axios from 'axios';
const Admin = (props) =>{
  const [prodCategories, setCategories] = React.useState([])
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
    axios
    .get("/categories")
    .then((result) => {
      console.log("CUTE CAT DATA", result.data)
      setCategories(result.data)
    });
    };

  let mapTabs = categories.map((category) => {
    console.log(category);
    return (
      <Tab
        className={classes.paper}
        label={category}
      ></Tab>
    );
  });
  console.log(props)
  const handleChange = (event, newValue) => {
    console.log("CAT DAT", getCategories())
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
          <Inventory categories={prodCategories} getCategories={getCategories}/>
        </div>
      )
      setPage(displayPage)
     } else {
      setPage(null)
     }
  };

  React.useEffect(()=>{
    getCategories()
  },[])

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