import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      searchPosts: [],
      input: "",

    };
  }
  handleCreds = () => {
     localStorage.removeItem("credentials");

  };

  componentDidMount() {
    this.setState({ postList: dummyData });
  }

  handleSearch = searchTerm => {
    this.setState({ input: searchTerm.target.value });
    const search = [];
    for (let i = 0; i < this.state.postList.length; i++) {
      if (this.state.postList[i].username.includes(this.state.input)) {
        search.push(this.state.postList[i]);
      }
    }
    this.setState({ searchPosts: search });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.handleSearch} handleCreds={this.handleCreds} />
        <PostContainer
          postList={
            this.state.input === ""
              ? this.state.postList
              : this.state.searchPosts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
