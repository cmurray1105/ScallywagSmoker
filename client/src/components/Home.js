import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Menu from "./Menu";
import Axios from "axios";
// import './bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loaded: false,
      total: 0,
      cart: {},
      // productIds: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    // this.categorySelected = this.categorySelected.bind(this)
  }
  componentDidMount() {
    this.getProducts("meats");
  }
  getProducts(category) {
    Axios.get("/products", {
      params: {
        product: category,
      },
    })
      .then((result) => {
        this.setState({
          products: result.data,
          loaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleCategorySelected(category) {}
  addToCart(item) {
    // let ids = this.state.productIds;
    let total = this.state.total;
    let cartItems = this.state.cart;
    if (!cartItems[item.productName]) {
      cartItems[item.productName] = {
        quantity: item.quantity,
        id: item.id,
        originalQuantity: item.originalQuantity,
      };
    } else {
      cartItems[item.productName].quantity += item.quantity;
    }
    total += item.price * item.quantity;
    let priceString = total.toString();
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
    // console.log("PRICE", parseInt(priceString))
    this.setState({ cart: cartItems, total: priceString });
  }

  clearOrder() {
    this.setState({ cart: {}, total: 0 });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <Banner />
          </div>
          <div className="body">
            <Menu
              addToCart={this.addToCart}
              getProducts={this.getProducts}
              products={this.state.products}
              loaded={this.state.loaded}
              cartItems={this.state.cart}
            />
          </div>
          <div className="bbqList">
            <Cart
              clearOrder={this.clearOrder}
              total={this.state.total}
              products={this.state.products}
              cartItems={this.state.cart}
            />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default Home;
