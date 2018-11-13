import React, { Component, Fragment } from "react";
import PostContainer from "./PostContainer";
class PostsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {(this.props.post.filtered.length > 0
          ? this.props.post.filtered
          : this.props.post.post
        ).map(post => {
          return <PostContainer key={post.imageUrl} post={post} />;
        })}
      </Fragment>
    );
  }
}

export default PostsPage;
