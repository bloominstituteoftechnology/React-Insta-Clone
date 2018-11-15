import React, { Component} from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    let storedPosts = JSON.parse(localStorage.getItem('posts'));
    if(storedPosts) {this.setState({ posts: storedPosts})}
    this.setState({
      posts: dummyData,
    })
  }

  logout = (props) => {
    console.log("LOGOUT PROPS", props);
    
    localStorage.removeItem("username");
    this.setState({
      isLoggedIn: false
    })
    window.location.reload()
  }

  handleSearchChange = e => {
    let posts = this.state.posts.filter(post => {
      if(post.username.includes(e.target.value.toLowerCase())) {
        return post;
      }
    });return this.setState({ filteredPosts: posts})
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        <SearchBarContainer 
            searchPosts={this.handleSearchChange}
          />
          <button
            className="logout"
            onClick={this.logout}
          >LOGOUT</button>
          <PostContainer 
            data={this.state.filteredPosts.length > 0 ?
              this.state.filteredPosts : 
              this.state.posts}
          />
      </div>
    )
  }
}

export default PostsPage
