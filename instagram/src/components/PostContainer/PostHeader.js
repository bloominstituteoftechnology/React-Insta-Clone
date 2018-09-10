import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
	return (
		<div className="post-header">
			<div id="user">Username</div>
			<div id="post-image">Img</div>
		</div>
	);
};

export default PostHeader;
