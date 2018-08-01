import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchInfo: ''
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  searchItemHandler =(event)=> {
    this.setState({searchInfo: event.target.value});
  }

  searchSubmitHandler=(event)=> {
    event.preventDefault();
    let myPosts= this.state.posts.filter(item => item.username.toLowerCase() === this.state.searchInfo.toLowerCase());
    this.setState({posts: myPosts, searchInfo: ''});
  }

  render () {
    return (
        <div>
          <SearchBar searchItem={this.searchItemHandler} searchValue={this.state.searchInfo} searchSubmit={this.searchSubmitHandler} />
          {this.state.posts.map(item => <PostContainer post={item} comments={item.comments} key={item.timestamp} /> )}
        </div>
      )
  };
}

export default PostsPage;
