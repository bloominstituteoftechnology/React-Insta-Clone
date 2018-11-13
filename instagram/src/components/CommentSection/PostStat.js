import React from 'react';
import PropTypes from 'prop-types';

const PostStat = props => {
  return (
    <div className="post--stat">
      <div className="stat-icons">
        <i
          className={
            `${props.liked ? "fas" : "far"} fa-heart`
          }
          onClick={(cb) => props.toggleLike(props.updateLikes)}
          style={{
            color: props.liked ? 'red':'black'
          }}
        ></i>
        <i className="far fa-comment fa-flip-horizontal"></i>
      </div>
      {props.likes > 1 ? `${props.likes} likes` : `${props.likes} like`}
    </div>
  );
}

PostStat.propTypes = {
  likes: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
}

export default PostStat;