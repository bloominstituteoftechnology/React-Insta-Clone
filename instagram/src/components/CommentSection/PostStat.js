import React from 'react';
import PropTypes from 'prop-types';

const PostStat = props => {
  return (
    <div className="post--stat">
      <div className="stat-icons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment fa-flip-horizontal"></i>
      </div>
      {props.likes > 1 ? `${props.likes} likes` : `${props.likes} like`}
    </div>
  );
}

PostStat.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default PostStat;