import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
// import CommentContainer from "./components/CommentContainer/CommentContainer";
import Authenticate from "./components/Authentication/Authenticate";

const App = Authenticate(
  class App extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        filteredPosts: []
      };
    }

    componentDidMount() {
      this.setState({ data: dummyData });
    }

    handlePostSearch = event => {
      const posts = this.state.data.filter(post => {
        if (post.username.includes(event.target.value)) {
          return post;
        }
      });
      this.setState({ filteredPosts: posts });
    };

    render() {
      return (
        <div className="container">
          <SearchBar searchPosts={this.handlePostSearch} />
          <PostContainer
            toes={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.data
            }
          />

          {/* toes gets assigned to data from line 12*/}
          {/* <CommentContainer /> */}
        </div>
      );
    }
  }
);
export default App;
