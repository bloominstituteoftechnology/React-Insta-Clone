import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import styled from 'styled-components';

const Thumbnail = styled.div`
  margin: 0 auto 0 18%;
  
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
`;

const Comments = styled.div`
  margin: 0 auto 0 19%
`;

const PostWrap = styled.div`
  margin: 75px 0;
`;

const PostContainer = (props) => {
  return (
    
    <PostWrap>
      <Thumbnail><img src={props.post.thumbnailUrl} alt={''}/></Thumbnail>
      <Image><img src={props.post.imageUrl} alt={''}/></Image>
      <Comments><CommentSection likes={props.post.likes} comments={props.post.comments} /></Comments>
    </PostWrap> 
    
  );
}



export default PostContainer;