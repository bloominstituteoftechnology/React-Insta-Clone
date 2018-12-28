import React, { Component } from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(dataItem => (
          <PostContainer data={dataItem} key={dataItem.timestamp}/>
        ))}
      </div>
    );
  }
}

export default App;
