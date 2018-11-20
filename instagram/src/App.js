import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import './Style.css';

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Authenticate />
      </div>
    );
  }
}

export default App;
