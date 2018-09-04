import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login'

import './index.css';

class App extends Component {
  render() {
    return (<div className="container"><Login /></div>)
  }
}

export default Authenticate(App);

// <PostsPage />



