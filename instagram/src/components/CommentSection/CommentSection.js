import React from 'react'
import CommentItem from "./CommentItem";
import './CommentSection.scss';
import styled from 'styled-components'

const CommentList = styled.ul`
	 margin-top: 6px;
	 text-align:left;
`


const CommentSection= (props)=>{
	const onDeleteComment = (e, postId, commentId)=>{
		props.onDeleteComment(e, postId, commentId)
	}

	return (
			<CommentList >
				{props.comments.map(el => {
					return (
						<CommentItem comment={el}
									 key={el.id}
									 onDeleteComment={e => onDeleteComment(e, props.postId, el.id)} />
					)
				})}
			</CommentList>
	)
}

export default CommentSection

