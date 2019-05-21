//header
import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

//Here I am creating a component that comprises just the thumbnail and the username
//because it will be easier to style them as a single component. This component
//is passed into the Post component where it is combined with the imageUrl,
//the CommentSection component, and the likes component
const PostHeader = props => {
  return( <div className="header">
            <div className="thumbnail">
              <img
                alt="profile picture"
                src={props.thumbnailUrl}
                />
            </div>
            <div className="userName">
              <strong>{props.username}</strong>
            </div>
          </div>
);
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
