import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
	return (
		<div className="post-header">
			<img src={props.thumbnailUrl} alt="User thumbnail image in post header" />
			<p>{props.username}</p>
		</div>
	);
};

PostHeader.propTypes = {
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
};
export default PostHeader;
