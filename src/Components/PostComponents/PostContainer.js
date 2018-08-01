import React from 'react';
import PropTypes from 'prop-types';
import './posts.css';

import CommentSection from './../CommentComponents/CommentSection';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return(
    <div className="post-container">
      <PostHeader thumbnail={props.post.thumbnailUrl} user={props.post.username} />
      <div className="post-image"><img className="fluid-img" alt="post" src={props.post.imageUrl} /></div>
      <CommentSection key={props.id} id={props.id} username={props.username} comments={props.post.comments} likes={props.post.likes} timestamp={props.post.timestamp}/>
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string
  })
}

export default PostContainer;
