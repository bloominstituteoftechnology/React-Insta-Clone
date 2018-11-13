import React from 'react';
import '../../less/Comments.less';
import Comment from './NewComment';

const CommentSection = (props) => {
	return (
		<React.Fragment>
			<section className="comments">
				{props.posts.comments.map((comment) => (
					<div className="comment">
						<h3>
							<span>{comment.username}</span> {comment.text}
						</h3>
					</div>
				))}
			</section>
			<Comment 
			AddComment={props.AddComment}
			commentInput={props.commentInput}
			handleChange={props.handleChange}
			
			/>
		</React.Fragment>
	);
};

export default CommentSection;
