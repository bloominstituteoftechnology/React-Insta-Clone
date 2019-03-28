import React from 'react'
import CommentItem from "./CommentItem";
import './CommentSection.scss';

const CommentSection= (props)=>{
	const onDeleteComment = (e, postId, commentId)=>{
		props.onDeleteComment(e, postId, commentId)
	}

	return (
		<section className="commentSection">
			<ul>
				{props.comments.map(el => {
					return <CommentItem comment={el} key={el.id}
					onDeleteComment={e => onDeleteComment(e, props.postId, el.id)} />
				})}
			</ul>
		</section>
	)
}

export default CommentSection

