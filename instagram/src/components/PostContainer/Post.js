import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import Likes from "./Likes";
import PropTypes from 'prop-types';
import styled from "styled-components";

const PostImage = styled.img`
  width: 99%;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }

  incrementHandler = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes +1
      }
    })
  }

  // incrementHandler = () => {
  //   let likes = this.state.likes + 1;
  //   this.setState({likes});
  // }

  render() {
  return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <PostImage
          alt="post thumbnail"
          src={this.props.post.imageUrl}
        />
      </div>
      <Likes
        incrementHandler = {this.incrementHandler}
        likes = {this.state.likes}/>
      <CommentSection comments={this.props.post.comments} />
    </div>
  );
};
};

Post.propTypes = {
  postObject: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired
  })

}


export default Post;
