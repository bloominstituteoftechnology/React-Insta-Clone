import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './Dummy';
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className ="app-container">
        <SearchBar />
        <div>
          {dummyData.map(dummyObj =>{
            return(
              <PostContainer dummyObj = {dummyObj} key = {dummyObj.timestamp}/>
            );
          })}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  dummyData : PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl:PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments:PropTypes.arrayOf(
        PropTypes.shape({
          username:PropTypes.string,
          text: PropTypes.string,
        })
      )
    }).isRequired
  )
}

export default App;
