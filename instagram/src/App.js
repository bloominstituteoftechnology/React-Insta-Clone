import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import dummyData from './dummy-data';
class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      displayedPosts: [],
      searchValue: ''
    }
  }
  componentDidMount = () => {
    this.setState({
        posts: dummyData,
        displayedPosts: dummyData
    })
  }
  searchPosts = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    if (value.length > 0) {
      const displayedPostArray = this.state.posts.filter(post => {
        if (post.username.toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      })
      this.setState({
        displayedPosts: displayedPostArray
      })
    } //IF A SEARCH VALUE EXISTS, FILTER POSTS BY USERNAME
    else {
      this.setState({
        displayedPosts: this.state.posts
      })
    }//IF THERE IS NO SEARCH VALUE, DISPLAY THE DEFAULT POST ARRAY
  }
  render() {
    return (
      <div className="app-container">
        <SearchBar onChange={this.searchPosts} value={this.state.searchValue}/>
        <div className="main-content-container">
            {this.state.displayedPosts.map(post => {
            return <PostContainer post={post} />
          })}        
        </div>
        

      </div>
    );
  }
}

export default App;
