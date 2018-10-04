import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
	text-align: left;
	margin-left: 1.5rem;
	padding: 0.35rem 0;
	display: flex;

	.username {
		font-weight: bold;
		font-size: 1.5rem;
		margin-right: 0.5rem;
		display: inline-block;
	}

	.user-comment {
		font-size: 1.5rem;
		display: inline-block;
	}
`

const comments = props => {
	return (
		<CommentContainer>
			<div>
				<span className="username">{props.comment.username}</span>
			</div>
			<div>
				<span className="user-comment">{props.comment.text}</span>
			</div>
		</CommentContainer>
	)
}
export default comments
