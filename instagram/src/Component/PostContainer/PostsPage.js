import React, { Component } from 'react';
import '../../../src/App.css'
import SearchBar from '../SearchBar/search-bar';

import Post from '../PostContainer/Post';
import dummyData from '../../dummy-data'

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterdData: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchUsername = (e) => {
    this.setState({
      filterdData: this.state.data.filter((post) => {
        return post.username.includes(e.target.value)
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar search={this.searchUsername}/>
        <Post data={this.state.filterdData.length ? this.state.filterdData : this.state.data} />
       
      </div>
    )
  }
}

export default PostsPage;