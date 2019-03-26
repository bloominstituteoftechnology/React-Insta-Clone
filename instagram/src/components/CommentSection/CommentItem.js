import React from 'react'
import './CommentSection.scss';

const CommentItem= (props)=>{
	return (
			<li className="commentItem">
				<span className="author">{props.comment.username}</span>
				<span>{props.comment.text}</span>
				<a href="#" className="morelink">more</a>
			</li>
	)
}

export default CommentItem

