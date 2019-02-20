import React from 'react'
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer'
import Post from './Post'

class PostsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData })
    }

    searchPostsHandler = e => {
        const posts = this.state.posts.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post;
            }
        });

        this.setState({ filteredPosts: posts })
    }

  render() {
    return (
      <div className="App">
      <SearchBar searchTerm={this.state.searchTerm}
      searchPosts={this.searchPostsHandler} />
       { this.state.posts.map(post => {
            return (
            <Post     
                post = {post} 
       /> 
       )})}
      {/* <PostsContainer posts= {
          this.state.filteredPosts.length > 0 
          ? this.state.filteredPosts: 
          this.state.posts} /> */}
        
      </div>
    )
  }
}

export default PostsPage
