import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer';
import dummyData from './dummy-data'
import SearchBar from './SearchBar'


class App extends Component {

  constructor() {
    super();
    this.state = {
      comments:[],
    } 
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {search:value}
    );
    }


    submitHandler = event => {
      event.preventDefault();
  
        const obj = {
          task: this.state.task,
          id: Date.now(),
          completed: false,
          important:false,
        }
  
        this.setState({
          comments: [...this.state.todo, obj],
          task: "",
        });
    }


  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} searchClickHandler={this.searchClickHandler}/>
      <PostContainer posts={dummyData}/>
      </div>
    );
  }
}

export default App;
