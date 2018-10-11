import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.setState({ postData: dummyData });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer postItems={this.state.postData} />
      </div>
    );
  }
}

export default PostPage;
