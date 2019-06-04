import React, { useState } from 'react';
import data from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

function App() {
  const [post] = useState(data);

  return (
    <div className="App">
      <SearchBar />
      {post.map((userPost, index)=>{
        return (
        <PostContainer
        key={index}
        props={userPost}
        />)
      })
      }
      
    </div>
  );
}

export default App;
