import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchComponents/SearchBar";
import PostContainer from "./components/PostComponents/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({ dataSet: dummyData})
  }

  incrementLikes = url => {
    let data = this.state.dataSet.slice();
    data = data.map(post => {
      if (post.imageUrl === url){
        return post.likes++;
      }
    })
    this.setState({data});
  }

  searchInputHandler = e => {
    this.setState({filteredPosts: e.target.value});
  }

  searchPosts = e => {
    e.preventDefault();
    let search = this.state.filteredPosts; 
    let filtered = this.state.dataSet.filter(data => data.username.includes(search));
    this.setState({dataSet: filtered});
  }

  render() {
    return (
      <div className="App">
        <SearchBar
        searchInputHandler = {this.searchInputHandler}
        searchPosts = {this.searchPosts}
        />
        <PostContainer
        dataSet = {this.state.dataSet}
        incrementLikes = {this.incrementLikes}
        />
      </div>
    );
  }
}

export default App;
