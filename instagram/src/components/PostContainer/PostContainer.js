import React from "react";
import PropTypes from "prop-types";
import Posts from "../Posts/Posts";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Posts
        searchInput={this.props.searchInput}
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
