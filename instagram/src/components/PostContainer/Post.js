import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";


const StyledPost = styled.div`
  margin: 60px 0;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
`;
const MainImg = styled.img`
  height: 100%;
  width: 100%;
  margin: 10px 0;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ProfilePicture = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-right: 5px;
  ${props =>
    props.bold &&
    css`
      font-weight: 600;
    `};
`;

const Icons = styled.div`
  padding: 0 20px;
  svg {
    margin-right: 15px;
  }
`;

const Likes = styled.p`
  padding: 0 20px;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: false
    };
  }
  addLike = () =>
    this.setState({ likes: this.state.likes + 1, liked: !this.state.liked });
  removeLike = () =>
    this.setState({ likes: this.state.likes - 1, liked: !this.state.liked });
  render() {
    return (
      <StyledPost>
        <Profile>
          <ProfilePicture
            src={this.props.post.thumbnailUrl}
            alt={this.props.post.username}
            className="profile-picture"
          />
        <UserName bold>{this.props.post.username}</UserName>
        </Profile>
        <MainImg
          src={this.props.post.imageUrl}
          alt={this.props.post.comments[0].text}
        />
        <Icons>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            onClick={!this.state.liked ? this.addLike : this.removeLike}
            id={this.state.liked ? "red" : null}
          />
          <FontAwesomeIcon
            icon={faComment}
            style={{ height: "25px", width: "25px" }}
          />
        </Icons>
        <Likes>{this.state.likes} likes</Likes>
        <CommentSection
          comments={this.props.post.comments}
          timestamp={this.props.post.timestamp}
        />
      </StyledPost>
    );
  }
}
export default Post;
