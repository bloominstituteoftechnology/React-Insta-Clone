import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
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

export default App;
