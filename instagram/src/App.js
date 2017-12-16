import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'

const App = () => {
  return (
  <div className="aPP">
    <SearchBar/>
    {dummyData.map((post, i) => <PostContainer key={i} postData={post}/>)}
  </div>
  )
};


export default App;
