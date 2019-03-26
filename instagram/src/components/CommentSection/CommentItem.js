import React from 'react'
import './CommentSection.scss';

const CommentItem= ()=>{
	return (
			<li className="commentItem">
				<span className="author">philzcoffe</span>
				<span> We've got more than just delicious coffee</span>
				<a href="#" className="morelink">more</a>
			</li>
	)
}

export default CommentItem

