import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import './PostContainer.css';
import PropTypes from 'prop-types';


const PostContainer = props => {
  return (
    <div className='post-container'>
      <div className='title'>
        <img src={props.data.thumbnailUrl} className='thumbnail' alt='Thumbnail'/>
        <p>{props.data.username}</p>
      </div>
      <img src={props.data.imageUrl} className='image' alt='main' />
      <div className='buttons'>
        <i className='far fa-heart' />
        <i className='far fa-comment' />
      </div>
      <h4>{props.data.likes} likes</h4>
      <CommentsSection data={props.data.comments} />
    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  })
};

export default PostContainer;
