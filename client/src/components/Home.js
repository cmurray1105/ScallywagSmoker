// import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Menu from "./Menu";
import Axios from "axios";
import { Component } from 'React';
// import './bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loaded: false,
      total: 0,
      cart: {},
      categories: []
      // productIds: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    this.getCategories = this.getCategories.bind(this)
    // this.categorySelected = this.categorySelected.bind(this)
  }
  componentDidMount() {
    this.getProducts("meats");
    this.getCategories();
  }
  getCategories = () =>{
    Axios.get('/categories')
    .then((result)=>{
      console.log("CATEGORIES", result.data)
      let cats = []
      for (let i = 0; i < result.data.length; i++){
        cats.push(result.data[i].name)
      }
      this.setState({categories:cats})
    })
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
  addToCart(item) {
    // let ids = this.state.productIds;
    let total = this.state.total;
    let cartItems = this.state.cart;
    console.log("ITEMMMM", item)
    if (!cartItems[item.productName]) {
      cartItems[item.productName] = {
        quantity: item.quantity,
        id: item.id,
        originalQuantity: item.originalQuantity,
        price: item.price
      };
    } else {
      cartItems[item.productName].quantity += item.quantity;
    }
    console.log("TOTAL TYPE", typeof total)
    total += item.price * item.quantity;
    console.log("parse", parseInt(total))
    this.setState({ cart: cartItems, total: total });
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
              categories={this.state.categories}
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
