import React from 'react';
import PropTypes from 'prop-types';

const PostContent = props => {
  return (
    <div className="post-content">
      <img src={props.image} alt="postphoto" />
    </div>
  );
}

PostContent.propTypes = {
  image: PropTypes.string.isRequired,
}

export default PostContent;
