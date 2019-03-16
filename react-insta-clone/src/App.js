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
      array1: dummyData
    }
  }

  clickHandler()
  {
    let someVar = document.querySelector( ".App" );
    someVar.addEventListener( "click", ( event ) =>
    {
      console.log( "Hello" );
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBar />
        <PostContainer objects = { this.state.array1 } />
      </div>
    );
  }
}

export default App;
