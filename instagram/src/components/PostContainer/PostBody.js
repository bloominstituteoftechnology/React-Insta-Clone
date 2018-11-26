import React from 'react';
import PropTypes from 'prop-types';

//<img className="post-image" src={props.post.imageUrl} ></img>

function PostBody(props) {
	return (
    	<img className="post-image" src={props.postImageUrl} ></img>
  	);
}

PostBody.propTypes = {
  imageUrl: PropTypes.string
};

export default PostBody;