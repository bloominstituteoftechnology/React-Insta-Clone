import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentList = (props) => {
	return (
		<div>{props.comments.map((comment) => <Comment comment={comment} key={comment.id} />)}</div>
	)
}

CommentList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object)
}


export default CommentList;
