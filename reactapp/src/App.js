import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Headers'
import {Footer} from './components/Footer'
import {Login} from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="navbar navbar-dark bg-dark">
        <img src={logo} width = "100" height="100" className="App-logo" alt="logo" />
          Learn React
      </header>
      <Header title = "Krish React SPA Project"/>
      <Dashboard></Dashboard>
      <Login portal="Verizon"/>
      <Footer year="@2019"/>
    </div>
  );
}

export default App;
