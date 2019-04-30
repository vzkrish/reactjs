import React from 'react'
import logo from "../Components/logo2.svg"
export const Header = () => {
    return(
        <div>
        <nav className="navbar navbar-inverse"></nav>
        <div className="container-fluid">
          
        <div className="navbar-header">
          
        </div>
          <div className="navbar navbar-dark bg-dark -sm">
            <img src={logo} width = "75" height="75" className="Head-logo" alt="logo" />
            
            <span  class="alert alert-warning">Home</span>
            <span className="nav navbar-nav">Page1</span>
            <span  class="alert alert-warning">Home</span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span > </span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span > </span>

          </div>

          </div>
          
          </div>
    );
}


