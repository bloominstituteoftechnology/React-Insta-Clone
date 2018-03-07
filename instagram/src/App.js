import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import data from './dummy-data.js';
// import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor(){
    super();
    this.state ={
    dummyDataList: [],
    }
  }
  componentDidMount() {
    const {dummyData} = data;
    this.setState ({
      dummyDataList: dummyData,
    })
    console.log(this.state.dummyDataList);
  }

  render() {
    return (
      <div className='body'>
        <SearchBar />
        {/* <PostContainer /> */}
      </div>
    );
  }
}

export default App;
