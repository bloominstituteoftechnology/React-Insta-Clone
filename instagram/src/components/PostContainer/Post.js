import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

import './PostContainer.css';

import styled from 'styled-components';

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`

const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const PostImage = styled.img`
  width: 100%;
`

const PostTimeStamp = styled.div`
  display: flex;
  color: gray;
`

const Post = props => {
  return (
    <PostBorder>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <PostImage
          alt="post thumbnail"
          src={props.post.imageUrl}
        />
      </PostImageWrapper>
      {/* <div className="two-icons">
        <section>
          <i className="far fa-heart"></i>
        </section>
        <section>
          <i className="far fa-comment"></i>
        </section>
      </div> */}

      {/* <div className="likes">
        <div>373 likes</div>
      </div> */}
      <CommentSection comments={props.post.comments} />

      <PostTimeStamp>2 HOURS AGO</PostTimeStamp>
      </PostBorder>
  );
};

export default Post;