import React from "react";
import PropTypes from "prop-types";
import Posts from "../Posts/Posts";
import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.posts);
    return (
      <Posts
        like={this.props.like}
        posts={this.props.posts}
        comments={this.props.comments}
      />
    );
  }
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;
