import React, { Component } from 'react';
import dummyData from '../../dummy-data'
import PostContainer from './PostContainer';
import SearchContainer from '../SearchBar/SeachContainer';


class PostsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      text: '',
      search: '',
      likes: [],
      logout: props.logout
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
    this.setState({likes: dummyData.likes})
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
        <SearchContainer search={this.state.search} startSearch={this.startSearch} filterSearch={this.search} logout={this.state.logout} />
        <PostContainer user={this.state.data}  liked={this.liked} text={this.state.text} likes={this.state.likes} />
      </div>
    );
  }
}

export default PostsPage;
