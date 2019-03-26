import React from 'react'
import CommentItem from "./CommentItem";
import './CommentSection.scss';

const CommentSection= (props)=>{
	return (
		<section className="commentSection">
			<ul>
				{props.comments.map(el => {
					return <CommentItem comment={el} key={el.id}/>
				})}
			</ul>
		</section>
	)
}

export default CommentSection

