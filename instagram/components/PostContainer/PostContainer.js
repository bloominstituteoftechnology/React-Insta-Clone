import React from 'react';
import './PostContainer.css';
import CommentSection from '..CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className='postContainer'>
      {props.data.map(item => {
        return <CommentSection comments={props.item.comments} key={props.item.timestamp} />
      })}
    </div>
  )
}

PostContainer.PropTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;