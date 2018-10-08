import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyData,
    }
    console.log(dummyData);
  }

  render() {
    return (
      <div className="App">
        <PostContainer 
          dummyData={this.state.dummyData}
        />
      </div>
    );
  }
}

export default App;
