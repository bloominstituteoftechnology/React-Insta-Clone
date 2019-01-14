import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from './dummy-data';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: DummyData,
    }
  }
  render() {
    console.log(this.state.dummyData);
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post) =>{
          return <PostContainer post={post} />
        })}
        
      </div>
    );
  }
}

export default App;
