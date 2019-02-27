// src/components/Header/index.js
import React, { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../Header/Header.css';
import logo from '../sprite.png';


import App from './App';

class Header extends React.Component{
  render() {
    return (
  // ....
  <div className="logo">
  <img src={logo} />
          <img src={logo} width="100" height="50" />
        </div>
    )
}
}
export default Header;