import React, { Component } from 'react';
import logo from '../images/logo.png';



class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> 
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;