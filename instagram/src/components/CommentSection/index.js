import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../Styles/Reusables.js';
import './index.css';

const CommentSectionDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.0rem;
	margin-bottom: 10px;
`;

const UserCommentText = styled.span``;
// const CommentSection = props => {
//     return (
// 		<div className='comment-section'>
// 			<div className='user-comment-section'>
// 				<span className='comment-username'>{props.comment.username}</span>
// 				<span>{props.comment.text}</span>
// 			</div>
// 		</div>
//     )
// }

const CommentSection = props => {
    return (
		<CommentSectionDiv>
			<Username>{props.comment.username}</Username>
			<UserCommentText>{props.comment.text}</UserCommentText>
		</CommentSectionDiv>
    )
}

CommentSection.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default CommentSection;