import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";


class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default PostsPage;
