import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer.js';
import SearchBar from './components/Searchbar.js';
import CommentSection from './components/CommentSection.js';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: dummyData,
    }
  }

  render(){
  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={this.state.data}/>

    </div>
  );
}
}

export default App;
