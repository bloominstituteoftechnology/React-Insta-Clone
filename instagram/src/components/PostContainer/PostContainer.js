import React from 'react';
import styled from "styled-components";
import CommentList from '../CommentSection/CommentList';
import './Post.css';


// ------------------- STYLED COMPONENTS ---------------
const PostContainerSection = styled.div`
  margin: 0 20%;
  padding: 80px 0;  
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding-left: 15px;
  background-color: white;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 10px;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostDiv = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;
`;

const LikeSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  margin-top: 15px;
`;

const LogosUnderPost = styled.div`
  display: flex;
  flex-direction: row;
`;

// const HeartLogo = styled.div`
//   background: url(../SearchBar/Logos/download.png) no-repeat -184px -359px;
//   width: 22px;
//   height: 20px;
//   padding-right: 11px;  
//   cursor: pointer;
// `;

const LikeCounter = styled.h4`
  margin-top: 20px;
  margin-bottom: 12px;
`;

const UserName = styled.h4``;

// ------------------- STYLED COMPONENTS ---------------



function PostContainer(props) {
  return (
    <PostContainerSection>

      <UserHeader>
        <ProfilePicture src={props.profileObject.thumbnailUrl} alt='Profile'/>
        <UserName>{props.profileObject.username}</UserName>
      </UserHeader>

      <PostDiv>
        <PostImage src={props.profileObject.imageUrl} alt='Post'/>  

        <LikeSectionDiv>
          <LogosUnderPost>
            <div className='left-heart'></div>
            <div className='message-bubble'></div>
          </LogosUnderPost>          
          <LikeCounter>{props.profileObject.likes + 'likes'}</LikeCounter>
          <CommentList comments={props.profileObject.comments} />
      </LikeSectionDiv>      

      </PostDiv>      

    </PostContainerSection>
  );
}

export default PostContainer;