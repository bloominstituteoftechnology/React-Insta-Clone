import React from 'react';
import './CommentSection.css';

const CommentSection = props =>{
    
	return (
		<div className="commentSection">{
			props.commentArray.map( (commentObject, index) =>{
				return (
				<div key={index} className="commentObject">
					<div className="comment-username">{commentObject.username}</div>
					<div className="comment">{'  '+commentObject.text}</div>
				</div>
				);
			})}
		</div>
    );
}

export default CommentSection;


