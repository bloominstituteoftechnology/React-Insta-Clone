import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar'
import PostInfo from './Components/PostInfo'
import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      post:[],
      comments:[],

    }
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState(
      {search: value}
    );
  }

  componentDidMount() {
    this.setState({post: dummyData})
  }


  submitHandler = event =>{
    event.preventDefault();

    const obj = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      comments:[...this.state.todo, obj],
      task: '',
    });
  }


  render() {
    return(
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} searchClickHandler={this.searchClickHandler}/>
      <PostInfo post={this.state.post} />
      
      </div>
    );
  }
}

export default App;
