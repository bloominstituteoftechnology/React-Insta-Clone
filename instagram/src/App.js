import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor(){
    super();
    this.state ={
    dummyDataList: [],
    }
  }
  componentDidMount() {
    
    this.setState ({
      dummyDataList: dummyData,
    })
    
  }

  render() {
    return (
      <div className='body'>
        <SearchBar />
        {this.state.dummyDataList.map((item, i) => {
          return(
            <PostContainer key={i + 8124} dataArray={item}/>
          )
        })}
      </div>
    );
  }
}

export default App;
