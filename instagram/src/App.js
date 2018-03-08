import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const App = () => (
  <div className="App">
    <SearchBar />
    {dummyData.map((post, i) => <PostContainer key={i} postData={post} />)}
  </div>
);

export default App;
