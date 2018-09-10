import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class PostPage extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      };
    }
   
    componentDidMount() {
      this.setState({ posts: dummyData});
    }
    handleInput = e => {
    //   console.log(e);
    //   console.log(e.target.value);
      const posts = this.state.posts.filter(post => 
        post.username.includes(e.target.value));  
        this.setState({ filteredPosts: posts });
        
    };
   
    render() {
      return (
        <div className="App">
        <SearchBar handleInput={this.handleInput} />
        <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts}/>
        </div>
      );
    }
  }
  
  export default PostPage;
  