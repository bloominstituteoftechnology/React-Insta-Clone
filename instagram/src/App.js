import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // postData: dummyData,
      postData: [],
    };
  }

  // In app.js use componentDidMount() to set your data to the component's state. Use the 
  // state object to pass data to your PostContainer component.

  componentDidMount() {
    console.log("App DidMount called");
    this.setState({
      postData: dummyData
    })
  }  // "Good place to fetch your data and set your state accordingly."

  // LIFECYLE MOUNTING: constructor invoked ---> render called ---> add stuff to DOM ---> componentDidMount invoked (in case there's any asynchronous data we need to handle) 


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IG APP CLONE</h1>
        </header>
        <SearchBar />
        <PostContainer postData = {this.state.postData}/>        
      </div>
    );
  }
}

export default App;
