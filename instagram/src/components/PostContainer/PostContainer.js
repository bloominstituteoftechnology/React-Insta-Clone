import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import heart from "../icons/heart.png";
import chat from "../icons/chat.png";
import { Heart, MessageCircle } from "react-feather";
import PropTypes from "prop-types";
import { StyledPost, UserDiv, IconBar, Thumbnail, UserName, TimeStamp, LikeCounter } from "../Styles.js";
import moment from "moment";

class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: props.post,
      likes: props.post.likes,
      username: props.username,
    };
  }

  increaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  render() {
    return (
      <div>
        <StyledPost>
          <UserDiv>
            <Thumbnail
              src={this.state.post.thumbnailUrl}
              alt=""
            />
            <UserName> {this.state.post.username} </UserName>
          </UserDiv>
          <img src={this.state.post.imageUrl} alt="" />
          <IconBar>
            <Heart onClick = {() => {this.props.increaseLikes(this.props.index)}} />
            <MessageCircle />
          </IconBar>
          <LikeCounter>{this.state.likes} likes</LikeCounter>
          <CommentSection comments={this.state.post.comments} username={this.state.username}/>
          <TimeStamp>{moment(this.state.post.timestamp, "MMMM Do YYYY, h:mm:ss").fromNow()}</TimeStamp>
        </StyledPost>
      </div>
    );
  }
}

PostContainer.propTypes = {
  index: PropTypes.number,
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
  }),
  username: PropTypes.string,
  increaseLikes: PropTypes.func,
}

export default PostContainer;


