import React from 'react';
import PropTypes from 'prop-types';
import './posts.css';
import { PostHeading, UserIcon, IconImg, UserName } from './PostStyle';

const PostHeader = props => {
  return(
    <PostHeading>
      <UserIcon><IconImg src={props.thumbnail} alt="user profile icon" /></UserIcon>
      <UserName><strong>{props.user}</strong></UserName>
    </PostHeading>
  );
};

PostHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default PostHeader;
