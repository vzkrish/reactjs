import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'

import { Layout } from './components/Layout';
import Heading from './components/Heading';
import Footer from './components/Footer';
import {Home} from "./components/Home"
import {Customers} from "./components/Customers"
import {Login} from "./components/Login"
import Cars from "./components/Cars"
import CarsDetails from "./components/CarDetails"
import {Greet} from "./components/Greet"


function App() {
  return (
    <div className="App">
<br/>
{/* <Heading></Heading> */}
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    <img src={logo} className="App-logo" height ="75" width = "75" alt="logo" />
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link href="#">Home</Link></li>
      <li><Link exact to ='/users'>Customers</Link></li>
      <li><Link exact to ='/cars'>Cars</Link></li>
      <li><Link exact to ='/greet/Krish'>Greet</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link exact to ='/singup'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link exact to ='/login'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
<main className="Mycontainer">
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/users" component={Customers} />
  <Route path="/login"  component={Login} />
  <Route path="/cars"  component={Cars} />
  <Route path="/carDetails/:carId" component={CarsDetails} />
  <Route path="/greet/:username" render={(props) => (<Greet{...props}/>)} /> 
   <Route component={NotFound}/> 
</Switch>
</main>


<Layout></Layout>
<Footer></Footer>


    </div>
  );
}

const NotFound = () => <h1>Sorry.. </h1>

export default App;

