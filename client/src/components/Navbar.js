import { makeStyles } from "@material-ui/core/styles";
// import Popper from '@material-ui/core/popper';
import React, {ReactElement} from "react";
import TableChartIcon from "@material-ui/icons/TableChart";
import {
  Button,
  IconButton,
  Container,
  CssBaseline,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import "./styles.css";
import CartPopper from './CartPopper';
import CheckoutModal from './CheckoutModal'

function Navbar (props) {
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles((theme) => ({
    paper: {
      border: "none",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      zIndex: 3,
      height: '333.3px',
      width: '400px',
      borderRadius: '5%',
      margin:'auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '4fr 1fr',
      gridTemplateAreas: " 'side list side'  'side checkout side"
    },
    button: {
      height: '38px',
      width:'38px',
      float: 'right',
      marginRight:'15px',
      // background: 'white',
      // fontWeight : 'bold',
      borderRadius: 2,
      // border: 0,
      color: 'red',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px  grey',
      textAlign: 'center'
      // display: 'block',
      // marginLeft: 'auto',
      // marginRight: 'auto',
    },
    cartContainer: {
      gridArea: 'list',
      // gridTemplateColumns: ' 1fr 1fr 1fr',
      // gridTemplateRows: '1fr 1fr 1f 1fr',
      // gridTemplateAreas: " 'side list side' 'side list side' 'side list side' 'side checkout side' "
    },
    checkoutArea: {
      gridArea: 'checkout'
    }
  })
  )
  const classes = useStyles();
  const [anchorEl, handleAnchor] = React.useState(null);
  const [arrowRef, handleArrowRef] = React.useState(null)
  // const handleClick = (event)=>{
  //   setAnchorEl(event.currentTarget)
  //   setOpen(!open)
  // }
  // const [anchorEl, setAnchor] = React.useState(null)
  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popper' : undefined;
  // const content = (
  //   <div>
  //     Popper Content and stuff
  //   </div>
  // )
  const handleClick = (event) => {
    handleAnchor(anchorEl ? null : event.currentTarget);
    setOpen(!open)
  };
  return(
    // <CssBaseline />
    // <Container maxWidth="sm">
    // <CartPopper
    //       content={content}
    //       open={open}
    //       placement="bottom"
    //       onClose={() => setOpen(false)}
    //       arrow={true}
    //       anchorEl={anchorEl}
    //     >
    <div >
                  <button className={classes.button} onClick={handleClick}>
                  Cart
                </button>
                    <CartPopper
                  placement="top"
                  open={open}
                  anchorEl={anchorEl}
                  modifiers={{
                    flip: {
                      enabled: true,
                    },
                    arrow: {
                      enabled: true,
                      element: arrowRef,
                    },
                    preventOverflow: {
                      enabled: "true",
                      boundariesElement: 'scrollParent'
                    },
                  }}
                >
                  {
                    true &&
                    <span className="arrow" ref={handleArrowRef} />
                  }
                  <div className={classes.paper}>
                  {/* <div className="wrapper"> */}
                  <div className="cartContainer">
                  LIST
                  </div>
                  <div className="checkoutArea">
                    <CheckoutModal />
                  {/* </div> */}
</div>
                  </div>
                </CartPopper>
    </div>
  )
}
export default Navbar;