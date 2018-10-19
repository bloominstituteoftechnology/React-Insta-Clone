import React from "react";
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar";

//main state goes in this component

class PostsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  postsHandler = event => {
      this.setState({
          filteredPosts: this.state.posts.filter(post => {
            return post.username.includes(event.target.value)
          })
      })
    // const posts = this.state.posts.filter(posts => {
    //   if (posts.username.includes(event.target.value)) {
    //     return posts;
    //   }
    // });
    // this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.postsHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
