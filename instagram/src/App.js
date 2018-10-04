import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    
    return (
      <div className="App">
      <SearchBar/>
        <>
          {dummydata.map(obj => {
            return (

              <PostContainer key={obj.timestamp} InstaData={obj} CommentArray={obj.comments} />

            );
          })}
        </>
       
           
      </div>
    );
  }
}
App.propTypes = {
dummydata: PropTypes.arrayOf(
  PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      })
    )}).isRequired)
}
export default App;
