import React from 'react'
import CommentItem from "./CommentItem";
import './CommentSection.scss';

const CommentSection= (props)=>{
	return (
		<section className="commentSection">
			<ul>
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
			</ul>
		</section>
	)
}

export default CommentSection

