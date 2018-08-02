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
      <CommentsSection data={props.data.comments} likes={props.data.likes} user={props.data.username}/>
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
