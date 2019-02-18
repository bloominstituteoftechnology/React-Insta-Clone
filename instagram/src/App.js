import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';

// library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      {
        dummyData.map(data => 
        <div>
          {console.log(data)};
          <PostContainer data={data}/>
          <CommentSection data={data}/>
        </div>)
      }
      </div>
    );
  }
}

export default App;
