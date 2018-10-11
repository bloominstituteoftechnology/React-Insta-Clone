import React from 'react';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostsContainer from './PostsContainer';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            filterPost: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
      }
    
      searchPostHandler = event => {
        const posts = this.state.posts.filter(post => {
          if (post.username.includes(event.target.value)) {
            return post;
          }
        })
        this.setState({filterPost: posts});
      }
    
      render() {
        return (
          <div className="App">
            <SearchBarContainer 
              searchPost={this.searchPostHandler}
            />
            <PostsContainer 
              posts={this.state.filterPost.length > 0 
                ? this.state.filterPost
                : this.state.posts} 
            />
          </div>
        );
      }
}

export default PostsPage;