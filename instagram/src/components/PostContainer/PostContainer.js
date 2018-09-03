import React from "react";
import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    {
      console.log(this.props);
    }
    return <h2>{this.props.post.username}</h2>;
  }
}

export default PostContainer;
