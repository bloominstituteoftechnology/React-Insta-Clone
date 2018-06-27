import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer'
import dummyData from './dummy-data';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }


  render() {
    return (
      <div className='app-container'>
        <div className="search-bar-container">
          <div className='header-logo'>
            <img src={require('./imgs/instagram-camera.png')} className='logo-camera' alt='insta-camera'/>
            <img src={require('./imgs/instagram-logo.svg.png')} className='logo-name' alt='header-logo'/>
          </div>
          <SearchBar />
          <div className='header-icon-bar'>
            <img src={require('./imgs/circle-icon.png')} className='circle-icon' alt='circle icon'/>
            <img src={require('./imgs/heart-icon.png')} className='heart-icon' alt='heart icon'/>
            <img src={require('./imgs/person-icon.png')} className='person-icon' alt='person icon'/>
          </div>
        </div>
        <div className='posts'>
          {this.state.dummyData.map( post => {
            return (
              <PostContainer
                posts={post}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
