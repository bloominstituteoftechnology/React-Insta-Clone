import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';

const DataWrapper= styled.div`
margin:auto 0;

`;

const PostContainer = obj => {
  return (
    <DataWrapper>
    <div className='style'>
      <div className='username'>{obj.obj.username} </div>
      <img src={obj.obj.thumbnailUrl} alt='img' className='thumbnail' />
      <img src={obj.obj.imageUrl} alt='insta post' className='instapost'/>
      <div className='likes'>{obj.obj.likes} likes</div>
      <CommentSection comments={obj.obj.comments} />
    <div className='timestamp'>{obj.obj.timestamp}</div>
    </div>
    </DataWrapper>
  );
};

export default PostContainer;
