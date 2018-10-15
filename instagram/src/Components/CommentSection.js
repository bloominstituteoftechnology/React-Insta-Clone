import React from 'react';
import PropTypes from 'prop-types';
import ThreeDots from './Img/three dot.png';

const CommentSection = props => {
  console.log(props);
  return (
    <div className='comment'>
      {props.comments.map((comment, index) => {
        return (
          <div key={index}>
            <h5>{comment.username}</h5>
            <p>{comment.text}</p>
          </div>
        )
      })}
      <div>
        <h5>Add a comment...</h5>
        <img src={ThreeDots} alt='three-dots'/>
      </div>
    </div>

  )
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentSection;