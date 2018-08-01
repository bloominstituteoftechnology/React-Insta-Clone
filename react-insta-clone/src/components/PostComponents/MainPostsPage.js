import React, { Component } from 'react';
import '../../App.css';
import dummyData from "../../dummy-data";
import SearchBar from "../SearchComponents/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
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
      <div className="main-page">
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

export default PostsPage;
