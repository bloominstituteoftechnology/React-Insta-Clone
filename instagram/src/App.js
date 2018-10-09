import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from '../src/dummy-data';

class App extends Component {
  constructor(){
    super();   
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      console.dir(this)
      this.setState({data: dummyData})
    }, 800)
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        data = {this.state.data}
        />
      </div>
    );
  }
}

export default App;
