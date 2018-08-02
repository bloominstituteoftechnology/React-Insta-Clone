import React from "react";
import CommentInput from "../CommentSection/CommentInput";
import styled from "styled-components"; 

const Post = styled.div`
margin:auto; 
`
const UsernameHeader = styled.div`
display: flex; 
flex-direction: row; 
align-items: center; 
margin: 10px 0; 
`
const Thumbnail = styled.img`
border-radius: 50%;
width: 50px; 
height: 50px; 
`
const Head = styled.div`
margin-left: 10px; 
font-weight: 700; 
`
const PostImg = styled.img`
width: 100%; 
`
const PostContainer = props => {
  return (
    <Post>
      {props.posts.map((item, index) => {
        return (
          <div key={index}>
            <UsernameHeader>
              <Thumbnail src={item.thumbnailUrl} alt="user" />
              <Head>{item.username}</Head>
            </UsernameHeader>
            <PostImg src={item.imageUrl} alt="Post-Image" />
            <div>
              <CommentInput likes={item.likes} comments={item.comments} />
            </div>
          </div>
        );
      })}
    </Post>
  );
};
export default PostContainer;
