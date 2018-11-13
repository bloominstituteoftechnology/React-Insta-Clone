import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.scss';

export default function PostContainer({data, addComment, addLike}) {

  const {comments, imageUrl, likes, thumbnailUrl, timestamp, username, id} = data;

  return (

    <div className='post'>

      <div className='header'>

        <img src={thumbnailUrl} alt='user thumbnail'></img>
        <h3>{username}</h3>

      </div>

      <img className='post-img' src={imageUrl} alt='post'></img>

      <div className='like-comment'>

        <div>

        <p className='far fa-heart' onClick={() => addLike(imageUrl)}></p>
        <p className='far fa-comment'></p>

        </div>

        <p>{likes} likes</p>

      </div>

      <CommentSection url={imageUrl} comments={comments} time={moment(timestamp, "MMMM Do YYYY hh:mm:ss A").fromNow()} addComment={addComment} />

    </div>

  );

}

PostContainer.propTypes = {

  data: PropTypes.object

}
