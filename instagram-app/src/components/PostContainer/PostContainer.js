import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostCover = styled.div`
height: 50%;
width: 45%;
min-width: 300px;
margin: 5px auto;
`;



export default function PostContainer(props) {
    return (
      <PostCover>
        {props.posts.map(post => 
        <Post
          key={post.postId}
          post={post}
        />
        )}
      </PostCover>
    )}