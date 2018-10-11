import React from "react";
import PropTypes from "prop-types";
import {
  PostDiv,
  PostTitle,
  PostTitleImg,
  PostImg,
  PostIcons,
  I,
  PostLikes
} from "./Styles";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: localStorage.getItem("likes")
        ? JSON.parse(localStorage.getItem("likes"))
        : this.props.data.likes,
      postLiked: localStorage.getItem("liked")
        ? JSON.parse(localStorage.getItem("liked"))
        : false
    };
  }
  plusLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.postLiked ? prevState.likes - 1 : prevState.likes + 1,
        postLiked: !prevState.postLiked
      };
    });
  };
  componentDidUpdate() {
    localStorage.setItem("likes", this.state.likes);
    localStorage.setItem("liked", this.state.postLiked);
  }
  render() {
    return (
      <PostDiv>
        <PostTitle>
          <PostTitleImg src={this.props.data.thumbnailUrl} alt="" />
          <p>{this.props.data.username}</p>
        </PostTitle>
        <PostImg src={this.props.data.imageUrl} alt="" />
        <PostIcons>
          <I className="far fa-heart" onClick={this.plusLikes} />
          <I className="far fa-comment" />
        </PostIcons>
        <PostLikes>{this.state.likes} likes</PostLikes>
        <CommentSection
          comments={this.props.data.comments}
          index={this.props.index}
        />
      </PostDiv>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;
