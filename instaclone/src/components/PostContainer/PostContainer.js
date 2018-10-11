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
      likes: this.props.data.likes
    };
  }
  plusLikes = () => {
    this.setState(prevState => {
      return { likes: prevState.likes + 1 };
    });
  };
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
        <CommentSection comments={this.props.data.comments} />
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
