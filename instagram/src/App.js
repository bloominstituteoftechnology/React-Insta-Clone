import React, { Component } from 'react';
import dummyData from './dummy-data' 

import './App.css'

import SearchContainer from './components/SearchBar/SearchContainer'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummyData,
      searchTerm: '',
      comment: ''
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
  render() {
    return (
      <div className='container'>
          <SearchContainer />
          <PostContainer data={this.state.data} commentHandler={this.addComment}/>
      </div>
    );
  }
}

export default App;
