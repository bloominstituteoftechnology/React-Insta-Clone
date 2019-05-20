//header
import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
  return (
    <div>
      <div className="profilePic">
        <img
          alt="profile picture"
          src={props.thumbnailUrl}
          />
      </div>
      <div className="userName">
        <strong>{props.username}</strong>
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


export default PostHeader;
