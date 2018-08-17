import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      postList: [],
    };
  }
  componentDidMount() {
    this.setState({ postList: dummyData });
  }



  render() {
    return (
      <div className="App">
        <PostContainer
          postList={this.state.postList}
        />
      </div>
    );
  }
}

export default PostsPage;
