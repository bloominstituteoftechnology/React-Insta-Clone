import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="cardInfo">
          {dummydata.map(obj => {
            return (

              <PostContainer 

            );
          })}
        </div>
       
           
      </div>
    );
  }
}

export default App;
