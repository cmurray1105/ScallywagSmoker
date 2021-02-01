import { makeStyles } from "@material-ui/core/styles";
import Popper from '@material-ui/core/popper';
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Products from "./Products";
import axios from 'axios';

function Navbar (props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      border: "none",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1),
      marginTop: '15px',
      backgroundColor: theme.palette.background.paper,
      zIndex: 3,
      height: '400px',
      width: '400px',
      borderRadius: '5%'
    },
    button: {
      height: '40px',
      float: 'right',
      marginRight:'15px'
    }
  }));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return(
  <div>
        <button className={classes.button} aria-describedby={id} type="button" onClick={handleClick}>
        Cart(0)
      </button>
  <Popper
    // className={classes.paper}]
    id={id}
    open={open}
    anchorEl={anchorEl}
    placement="bottom"
    disablePortal={false}
    modifiers={{
      // flip: {
      //   enabled: false,
      // },
      // preventOverflow: {
      //   enabled: true,
      //   boundariesElement: 'viewport',
      // },
      arrow: {
        enabled: true,
        element: 'arrowRef',
      },
    }}>
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
  </div>
  )
}
export default Navbar;