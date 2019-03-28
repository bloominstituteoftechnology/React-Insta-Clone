import React from 'react'
import './CommentSection.scss';

const CommentItem = (props)=>{
	const showMoreLink = ()=>{
		if(props.comment.text.length > 10){
			return <a href="#" className="morelink">more</a>
		}
	}
	
	const onMouseOver = (e)=>{
	}
	
	return (
			<li className="commentItem" onMouseOver={onMouseOver}>
				<span className="author">{props.comment.username}</span>
				<span>{props.comment.text}</span>
				{ showMoreLink()}
				<button className="closeButton" onClick={props.onDeleteComment}>X</button>
			</li>
	)
}

export default CommentItem

