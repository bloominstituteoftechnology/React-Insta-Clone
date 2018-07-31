import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'; 
import PostConatainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  
  render() {console.log(dummyData)
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(data =>
          <PostConatainer data = {data} />
        )}        
      </div>
    );
  }
}

export default App;
