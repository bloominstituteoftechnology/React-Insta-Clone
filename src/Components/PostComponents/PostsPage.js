import React from 'react';

import SearchBar from './../SearchComponents/SearchBar';
import PostContainer from './PostContainer';
import dummyData from './../../dummy-data';

class PostsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      filteredPosts: undefined,
      isLoggedIn: props.loggedIn,
      username: props.username,
    }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }

  handleFilter = event => {
    let searchValue = event.target.value.toLowerCase();
    if(searchValue !== '')
    {
      let newFilteredPosts = this.state.posts.filter(post => post.username.includes(searchValue));
      this.setState({
        filteredPosts: newFilteredPosts,
      });
    }else {
      this.setState({
        filteredPosts: undefined,
      })
    }
  }

  render(){
    return(
      <div className="app-container">
        <SearchBar handleLogout={this.props.handleLogout} filter={this.handleFilter} />
        {this.state.filteredPosts === undefined ?
          this.state.posts.map(post => <PostContainer key={post.id} id={post.id} username={this.state.username} post={post} />) :
          this.state.filteredPosts.map(post => <PostContainer key={post.id} id={post.id} username={this.state.username} post={post} />)}
      </div>
    )
  }
}

export default PostsPage;
