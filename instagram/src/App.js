import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<SearchBar />
      	{dummyData.map((data)=>{
      		return <PostContainer key={data.username} post={data}/>
      	})}
      	<CommentSection />
      </div>
    );
  }
}

export default App;
