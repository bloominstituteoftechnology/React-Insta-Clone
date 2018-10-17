import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';


class App extends Component {
  constructor( props)
  {
    super( props )
    this.state = 
    {
      array1: dummyData,
      loaded: false
    }
  }

  loadingFunction()
  {
    setTimeout( () =>
    {
      this.setState({
        loaded: true
      })
    }, 1 )
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBar />
        {
          this.state.loaded ? <PostContainer objects = { this.state.array1 } /> : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default App;
