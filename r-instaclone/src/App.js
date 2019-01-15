import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';



class App extends Component {
  constructor() {
    super();
     
        this.state = {
          dataSet: dummyData
        }
  }



render() {
  return (
    <div className="App">
    <SearchBar />
    <PostContainer datasetInfo={this.state.dataSet} />
    
    </div>
  )
}
}// end curly



export default App;
