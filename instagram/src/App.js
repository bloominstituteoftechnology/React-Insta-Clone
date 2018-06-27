import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Posts">
        {this.state.data.map(item => {
          return(
            <PostContainer
              key={Math.random()}
              item={item}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
