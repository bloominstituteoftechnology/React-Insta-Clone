import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import like from '../../assets/heart.svg';
import styled from 'styled-components';
import './Posts.css';


const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px lightgray;
`;

const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const LikesContainer = styled.div`
padding-left: 4%;
`;

const PostImg = styled.img`
width: 100%;
`;

const HeartLike = styled.img`
width: 30px;
height: 30px;
`;

const Post = props => {
  return (
    <PostBorder>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <PostImg
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
        <LikesContainer>
        <div onClick={()=> props.addLike(props.post.likes)}>
            <HeartLike src={like} className='heart' alt='' />
        </div>
          <strong>{props.post.likes}</strong>
        </LikesContainer>
      </PostImageWrapper>
      <CommentSection comments={props.post.comments} />
    </PostBorder>
  );
};

export default Post;