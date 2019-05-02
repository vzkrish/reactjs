import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import { Header } from './Components/Header';
import {ShoppingCart} from "./Components/ShoppingCart"
import ShopCart from "./Components/ShopCart"

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-inverse"></nav>
    <div className="container-fluid">
      
    <div className="navbar-header">
      
    </div>
      <header className="navbar navbar-dark bg-dark -sm">
      <img src={logo} className="App-logo" height ="100" width = "100" alt="logo" />
        
      </header>
      </div>

      <br/>
      {/* <ShoppingCart></ShoppingCart> */}
      <ShopCart></ShopCart>

</div>
  
      

      
  );
}

export default App;
