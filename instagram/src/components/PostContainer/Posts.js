import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import styled from "styled-components";

import "./PostContainerStyle.css";

const PostBorder = styled.div`
  border: 1px solid black;
  margin: 18px 0;
  box-shadow: 0px 5px 15px;
`;

const PostImage = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <PostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <PostImage alt="post thumbnail" src={this.props.post.imageUrl} />
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </PostBorder>
    );
  }
}

export default Post;
