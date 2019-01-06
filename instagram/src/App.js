import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    console.log("Constructor Invoked");
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    console.log("CDM Invoked");
    this.setState({dummyData: dummyData});
  }
 
  render() {
    console.log("Render Invoked")
    return (
      <div className="App">       
       <SearchBar />
       {this.state.dummyData.map(data => (
         <PostContainer key={data.timestamp} data={data} />
       ))}   
      </div>
    );
  }
}

export default App;
