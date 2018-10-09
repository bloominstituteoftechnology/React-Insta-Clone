import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/seachbar';

class App extends Component {
  constructor(){
    super()
    this.state={
      userData: dummyData,
    };
  
  
  }

 

  render() {
    return (
      <div className="App">

      <SearchBar />
        {/* {this.state.userData.map(data => 
            <div>{data.username}</div>)} */}
          
        
        
      </div>
    );
  }
}

export default App;
