import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      dummyData: [],
      comments: [],
    };
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData,
      comments: dummyData.comments,
    })
  
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(item => {
          return(
            <PostContainer key={item.timestamp} post={item} comments={item.comments}  /> 
          )}) 
        }
      </div>
    );
  }
}

App.propTypes ={
  dummyData: PropTypes.arrayOf(
    PropTypes.shape(
      {
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imgUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.shape(
          {
            username: PropTypes.string,
            text: PropTypes.string,
          }
        )
      }
    )
  )
}


export default App;
