import React, { Component } from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/Comments";
import LikeSection from "./LikeSection";
import "./PostContainer.css";
import { StyledDiv, StyledImg } from "../Styles/StyleSheet";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    const nickname = this.props.post.nickname;
    const avatar = this.props.post.avatar;
    const image = this.props.post.image;
    const caption = this.props.post.caption;
    const likes = this.props.post.likes;

    return (
      <StyledDiv post>
        <header>
          <StyledDiv postHead>
            <StyledDiv postHeadAvatar>
              <StyledImg avatarImg src={avatar} alt={nickname} />
            </StyledDiv>
            <StyledDiv postNickname>
              <span>{nickname}</span>
            </StyledDiv>
          </StyledDiv>
        </header>
        <div>
          <StyledDiv postImgBg>
            <StyledImg postImg alt={caption} src={image} />
          </StyledDiv>
        </div>
        <StyledDiv postIcons>
          <StyledDiv leftIcons>
            <div className="Post-icon-heart" onClick={this.addLikes} />
            <div className="Post-icon-comment" />
            <div className="Post-icon-share" />
          </StyledDiv>
          <StyledDiv rightIcons>
            <div className="Post-icon-save" />
          </StyledDiv>
        </StyledDiv>
        <section className="Post-likes">
          <LikeSection
            incrementLike={this.incrementLike}
            likes={this.state.likes}
          />
        </section>

        <Comments
          postId={this.props.post.image}
          comments={this.props.post.comments}
        />
      </StyledDiv>
    );
  }
}
export default Post;
