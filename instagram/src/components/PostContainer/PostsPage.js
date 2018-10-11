import React from "react";
import PostContainer from "./postcontainer";
import SearchBar from "../SearchBar/seachbar";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      searchedPost: [],
      searchResult: ""
    };
    console.log(this.state);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ userData: dummyData });
    }, 500);
  }

  handleInput = event => {
    this.setState({ searchResult: event.target.value });
  };

  searchResults = event => {
    this.handleInput(event);
    this.setState(prevState => {
      const searchedPost = prevState.userData.filter(result => {
        return result.username.includes(prevState.searchResult);
      });
      return { searchedPost: searchedPost };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          changeHandle={this.searchResults}
          searchPost={this.state.searchResult}
        />

        <PostContainer
          userData={
            this.state.searchedPost.length > 0
              ? this.state.searchedPost
              : this.state.userData
          }
        />
      </div>
    );
  }
}

export default PostsPage;
