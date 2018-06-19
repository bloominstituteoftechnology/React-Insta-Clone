import React, { Component } from 'react';
import dummyData from './dummy-data' 

import './App.css'

import SearchContainer from './components/SearchBar/SearchContainer'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
    }
  }

  addComment =(postId, comment) =>{
    let data = this.state.data.slice();
    data = data.map(post => {
      if (postId === post.timestamp){
        post.comments.push({
          username: 'loganilus',
          text: comment
        });
      }
      return post;
    })
    this.setState({data})
  }
  addLike =(postId) =>{
    let data = this.state.data.slice();
    data = data.map(post => {
      if(postId === post.timestamp){
        post.likes += 1;
      }
      return post;
    })
    this.setState({data});
  }

  handleSearch = (searchTerm) =>{
    let data = this.state.data.slice();
    if (searchTerm === ''){
      this.setState({data:dummyData})
      return null;
    }
    data = data.filter(post => {
      if (JSON.stringify(post).includes(searchTerm)){
        return post;
      }
    })
    if (data.length > 0){
      this.setState({data});
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='container'>
          <SearchContainer handleSearch={this.handleSearch} />
          <PostContainer likeHandler={this.addLike} data={this.state.data} commentHandler={this.addComment}/>
      </div>
    );
  }
}

export default App;
