import React, { Component } from 'react';
import dummyData from '../../dummy-data'
import PostContainer from './PostContainer';
import SearchContainer from '../SearchBar/SeachContainer';


class PostsPage extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      text: '',
      search: '',
      likes: 0
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
    console.log(dummyData[0].likes)
  }

  liked = (e) => {
    this.setState({likes: this.state.likes + 1})
  }

  startSearch = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  search = e => {
    e.preventDeafult()
    this.state.data.comments.filter((name) => {
      return name.usernmae.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
    })
  }

  render() {
    
    return (
      <div>
        <SearchContainer search={this.state.search} startSearch={this.startSearch} filterSearch={this.search} />
        <PostContainer user={this.state.data}  liked={this.liked} text={this.state.text} likes={this.state.likes} />
      </div>
    );
  }
}

export default PostsPage;
