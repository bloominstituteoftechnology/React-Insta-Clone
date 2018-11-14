import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import Post from "./components/PostContainer/Post";
import Header from './components/header/Header'
import PostContainer from './components/PostContainer/PostContainer'
class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    }
  }
  componentDidMount() {
    this.setState({
      post: dummyData,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer post = {this.state.post}/>

    </div>



    );
  }
}

export default App;