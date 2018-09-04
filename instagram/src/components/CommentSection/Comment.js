import React from 'react';
import PropTypes from 'prop-types';


import styled from 'styled-components';

const SBold = styled.span`
	font-weight: bold;
`;

const Comment = (props) => {
	return (
		<div>
		<p postid={props.comment.postid}><SBold >{props.comment.username}</SBold> {props.comment.text}</p>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		username: PropTypes.string,
	})
}

export default Comment;