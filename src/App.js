import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Body from "./body/body";
import Event from "./event/event";
import Footer from "./footer/footer";
import Banner from "./banner/banner";
import Product from "./product/product-router";
import System_shop from "./system-shop/system_shop";
import Cart from "./cart-shop/cart_shop";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
function App() {
  return (
    // <Router>
    //   <Header />
    //   <Banner />
    //   <Body />
    //   <Event />
    //   <Footer />
    //   <Switch>
    //     <Route exact path='/product-router-link' component ={Product}/>
    //   </Switch>

    //   <Product/>
    // </Router>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Banner />
          <Body />
          <Event />
          
        </Route>
        <Route path="/product-list">
          
          <Body />
          <Event />
          
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/system-shop">
          <Banner />
          <System_shop />
          <Event />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
