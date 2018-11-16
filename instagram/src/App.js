import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import './Style.css';

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Authenticate dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
