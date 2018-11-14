import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import Post from "./components/PostContainer/Post";
import Header from './components/header/Header'
import PostContainer from './components/PostContainer/PostContainer'
import Authenticate from './components/Authentication/Authentication'
class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      searchInput: ''
    }
  }
  componentDidMount() {
    this.setState({
      post: dummyData,
    })
  }

  searchHandler = event => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput)
  };


  render() {
    return (
  
      <div className="App">
        <Header 
        searchHandler ={this.searchHandler}
        
        />
        <PostContainer post={this.state.post} user={this.props.user}/>

    </div>



    );
  }
}

export default Authenticate(App);