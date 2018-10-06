import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar.js'; 
import PostContainer from './Components/PostContainer/PostContainer.js'; 


class App extends Component {
  constructor(){
    super(); 
    this.state = {
    data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    });
  }

  render() {
    if(!this.state.data.length){
      return <h3>"Loading..."</h3> 
    }

    return (
      <div className="App">
        <SearchBar/> 
        <PostContainer dummyData={this.state.data} /> 
      </div>
    );
  }
}

export default App;
