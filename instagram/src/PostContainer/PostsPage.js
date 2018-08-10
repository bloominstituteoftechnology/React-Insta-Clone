import React from "react";
// import PropTypes from "prop-types";
import dummyData from "../dummy-data";
import PostContainer from './PostContainer';
import SearchBar from "../SearchBar/SearchBar";



// const Authenticate = Authenticate(App);


class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: [],

    };
  }


  componentDidMount(){
    this.setState({posts: dummyData});
  }


  //Search posts function
  searchPostsHandler = event => {
    const posts = this.state.posts.filter(prop => {
      if (prop.username.includes(event.target.value)) {
        return prop;
      }
    });
    this.setState({filteredPosts: posts});
  };


  
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          postSearch={this.state.postSearch}
          />
        <PostContainer 
        posts={
          this.state.filteredPosts.length > 0 
          ? this.state.filteredPosts
          : this.state.posts
          } 
          />
        {/* <Authenticate /> */}
      </div>
    );
  };
};

export default PostsPage;
