import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import heart from "../icons/heart.png";
import chat from "../icons/chat.png";
import { StyledPost, UserDiv, IconBar, Thumbnail, UserName, TimeStamp } from "../Styles.js";

class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: props.post,
      likes: props.post.likes
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
            <img
              id="likeButton"
              src={heart}
              onClick={this.increaseLikes}
              alt=""
            />
            <img src={chat} alt="" />
          </IconBar>
          <p>{this.state.likes} likes</p>
          <CommentSection comments={this.state.post.comments} />
          <TimeStamp>{this.state.post.timestamp}</TimeStamp>
        </StyledPost>
      </div>
    );
  }
}

export default PostContainer;
