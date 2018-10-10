import React, { Component } from 'react';

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import dummyData from './dummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';


library.add(faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro)

class App extends Component {
  constructor(){
    super();
    this.state= {
      dummyData: [],
      searchKeyword: '',
      posts: []
    }
  }

  componentDidMount(){
  this.setState({
    posts: dummyData
  });
  }
  searchKey = (event) => {
    // event.preventDefault();
    const searchKey = event.target.value;
    const posts = []
    this.state.posts.filter(post => {
      return post.username.includes(searchKey) ? posts.push(post) : null;
    })
    // is searchkey blank?
    
    searchKey === '' ? this.setState({posts: dummyData}) : this.setState({posts : posts})

  }

  render() {
    return (
      <div className="App">
      <SearchBar search={this.searchKey} />
      {this.state.posts.map((post,index) => {
        return(
          <PostContainer data = {post} key = {post.timestamp} id={post.timestamp}></PostContainer>
        )
      })}
        <a href = "https://fontawesome.com/license">Icons by FontAwesome</a>
      </div>
    );
  }
}

export default App;
