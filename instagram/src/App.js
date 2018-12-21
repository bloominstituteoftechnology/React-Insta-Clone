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
      dummies: []
    }
  }

  componentDidMount() {
    console.log("CDM Invoked");
    this.setState({dummies: dummyData});
  }
 
  render() {
    console.log("Render Invoked")
    return (
      <div className="App">       
       <SearchBar />
       {this.state.dummies.map(dummy => (
         <PostContainer key={dummy.timestamp} dummy={dummy} />
       ))}
      </div>
    );
  }
}

export default App;
