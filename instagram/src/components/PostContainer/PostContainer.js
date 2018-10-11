import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

import {
  Post,
  Image,
  PostHeader,
  PostHeaderImage,
  PostUsername,
} from './PostContainerStyles';

const PostContainer = (props) => {
  return (
    <Post>
      <PostHeader>
        <PostHeaderImage
          src={props.post.thumbnailUrl}
          alt={`${props.post.username} profile`}
        />
        <PostUsername>{props.post.username}</PostUsername>
      </PostHeader>
      <Image src={props.post.imageUrl} alt="probably toast" />
      <div className="post-data">
        <button
          className="heart-icon"
          onClick={() => props.addLike(props.post.timestamp)}
        />
        <img className="comment-icon" src="" alt="" />
        <p>{props.post.likes} likes</p>
      </div>
      <CommentSection
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />
    </Post>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
};

export default PostContainer;
