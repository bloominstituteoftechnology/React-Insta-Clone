import React, {Component } from 'react';
import Data from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


class PostsPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      posts: [],
      filteredPosts: []      
    }
  }

  componentDidMount() {
    this.setState({posts: Data});
  }


  search(event) {
    let posts = this.state.posts.filter(post => {
      if(post.username.includes(event.target.value)) { return post; }
    });
    this.setState({filteredPosts: posts});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            search={this.search}
            />
         <PostContainer
           posts={this.state.posts}
           />
        </header>
      </div>
    );

  }
}

export default PostsPage;
