import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from '../src/components/SearchBar/SearchBar';

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
        <SearchBar />
        {this.state.dummyData.map(data => {
          return (
            <div className="App-intro">
              <p>
                <img src={data.thumbnailUrl} className='thumbnail'/> 
                <span className='thumb-user'>{data.username}</span>
              </p>
              
              <img src={data.imageUrl} className='image'/>
              <p>{data.likes} likes</p>
              {data.comments.map(comment => {
                return (
                  <div>
                    <p><span>{comment.username}</span> {comment.text}</p>
                  </div>
                )
              })}
              <p>{data.timestamp}</p>
            </div>
          );
        })}      
      </div>
    );
  }
}

export default App;
