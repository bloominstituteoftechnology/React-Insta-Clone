import React from 'react'
import './CommentSection.scss';

const CommentItem= (props)=>{
	const showMoreLink = ()=>{
		if(props.comment.text.length > 20){
			return <a href="#" className="morelink">more</a>
		}
	}
	return (
			<li className="commentItem">
				<span className="author">{props.comment.username}</span>
				<span>{props.comment.text}</span>
				{ showMoreLink()}
			</li>
	)
}

export default CommentItem

