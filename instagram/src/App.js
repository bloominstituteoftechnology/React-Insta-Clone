import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

import './index.css';

class App extends Component {
  render() {
    return (<div className="container"><PostsPage /></div>)
  }
}

export default Authenticate(App);



