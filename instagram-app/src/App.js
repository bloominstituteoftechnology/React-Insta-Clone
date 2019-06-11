import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">

      <SearchBar />
      <PostContainer />
      
    </div>
  );
}

export default App;
