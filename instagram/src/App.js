import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostPage from "./components/PostContainer/PostPage";
import Authenticate from "./components/Authentication/Authenticate";

const AuthPostPage = Authenticate(PostPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  handleInput = event => {
    const posts = this.state.posts.filter(post => {
      return post.username.includes(event.target.value);
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <AuthPostPage
          posts={this.state.posts}
          handleInput={this.handleInput}
          filteredPosts={this.state.filteredPosts}
        />
      </div>
    );
  }
}

export default App;
