//header
import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
  return (
    <div>
      <div className="profile">
        <img
        alt="user profile picture"
        src={props.thumbnailUrl}
        />
      </div>
      <div className="userName">
        <h4>{props.username}</h4>
      </div>
    </div>
)
}

PostHeader.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string,
      username: PropTypes.string
    })
  )
}

PostHeader.defaultProps = {
  dummyData: []
}

export default PostHeader;
