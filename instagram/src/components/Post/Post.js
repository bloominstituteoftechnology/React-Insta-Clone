import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
  padding: 5px;
`;
const Username = styled.p`
  font-weight: bold;
`;
const Image = styled.img`
  width: 100%;
`;
const Icons = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
const Likes = styled.p`
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Icon = styled.i`
  font-size: 20px;
  cursor: pointer;
  padding-right: 10px;
`;

const Post = props => {
  return (
    <PostContainer>
      <Profile>
        <ProfileImg src={props.thumbnail} alt="" />
        <Username>{props.username}</Username>
      </Profile>
      <div className="picture">
        <Image src={props.imageUrl} alt="" />
      </div>
      <Icons className="icons">
        <Icon className="far fa-heart" onClick={props.likeClickHandler} />
        <Icon className="far fa-comment" onClick={props.commentClickHandler} />
      </Icons>
      <Likes>{props.likes} likes</Likes>
    </PostContainer>
  );
};

export default Post;
