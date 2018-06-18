import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.dummyData.map(data => {
          return (
            <div className="App-intro">
              <img src={data.thumbnailUrl} className='thumbnail'/>
              <p>{data.username}</p>
              <img src={data.imageUrl} className='image'/>
              <p>{data.likes} likes</p>
              
              <p>{data.timestamp}</p>
            </div>
          );
        })}      
      </div>
    );
  }
}

export default App;
