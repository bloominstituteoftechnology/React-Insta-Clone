import React, { Component } from 'react';
import {userPosts} from './components/dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import './Style.css';

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Authenticate userPosts={userPosts} />
      </div>
    );
  }
}

export default App;
