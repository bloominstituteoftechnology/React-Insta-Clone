import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        dummyData.map((element,index) => {
          return(<PostContainer key={index} data={element}/>)
        })
      }
      </div>
    );
  }
}

export default App;
