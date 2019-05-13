import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <PostContainer data={dummyData.map(item =>
        <div className="dataSet">
          <p>{item.username}</p>
          <img src={item.img} alt={item.username}
        </div>
      )}/>
      <SearchBar />
    </div>
  );
}

export default App;
