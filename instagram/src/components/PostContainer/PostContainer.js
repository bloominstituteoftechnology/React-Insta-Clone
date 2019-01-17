import React from 'react';

import CommentSection from '../CommentSection/CommentSection.js';

import styled from 'styled-components';

const Post = styled.div`
  display:flex;
  flex-direction: column;
  width:50%;
  margin: 0 auto;
  border: 1px solid black;
  margin-bottom:50px;

`;

const PostGroup = styled.div``;

const PostImg = styled.img``;

const PostTop = styled.div`

  display:flex;
  align-items: center;

  width:100%;
  margin: 0 auto;


`;

const PostTopImg = styled.img`

  border-radius: 50%;
  width:100%;

`;

const ImgContainer = styled.div`
  width:8%;
  margin-bottom: 10px;

`;

const UserSpan = styled.span`
  margin-bottom:10px;
  margin-left: 2%;
  font-weight: bold;
`;

const PostContainer = props =>{

  const posts = props.posts.map(post =>{

    return (<Post>

              <PostTop>

                <ImgContainer><PostTopImg src = {post.thumbnailUrl}/></ImgContainer>

                <UserSpan>{post.username}</UserSpan>

              </PostTop>

              <PostImg src = {post.imageUrl} />

              <CommentSection comments = {post.comments} />

            </Post>

           )

  });

  return(<PostGroup>{posts}</PostGroup>);

}

export default PostContainer;
