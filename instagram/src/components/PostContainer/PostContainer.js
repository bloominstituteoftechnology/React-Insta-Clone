import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';
import Username from '../../Styles/Username';

const PostWrapper = styled.div`
  max-width: 604px;
  width: 100%;
  margin: 0 auto 6rem;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background: #fff;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;

const Thumbmail = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Instagram = styled.img`
  width: 100%;
  display: block;
`;

const IconContainer = styled.div`
  padding: 0 1.5rem;
  font-size: 2.5rem;
  display: flex;

  i {
    margin-right: 1.5rem;
    cursor: pointer;
  }
`;

const Likes = styled.div`
  padding: 0 1.5rem;
  font-weight: bold;
`;

const PostContainer = ({ data, likePost, id, index }) => {
  return (
    <PostWrapper>
      <Header>
        <Thumbmail src={data.thumbnailUrl} alt="User" />
        <Username>{data.username}</Username>
      </Header>
      <ImageContainer>
        <Instagram src={data.imageUrl} alt="Image" />
      </ImageContainer>
      <IconContainer>
        <i
          className={'far fa-heart'}
          onClick={e => likePost(e, index)}
          style={{ color: '#ED4956' }}
        />
        <i className="far fa-comment" />
      </IconContainer>
      <Likes>{data.likes} likes</Likes>
      <CommentSection comments={data.comments} id={id} />
    </PostWrapper>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default PostContainer;
