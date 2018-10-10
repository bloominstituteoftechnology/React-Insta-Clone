import React from 'react';
import dummyData from '../dummy-data.js';

const CommentSection = (props) => {
	return(
		<div>
			<div className = "commentsContainer">
				{dummyData.map((com, index) => (
					<div key={`${com.username}s comment ${index}`}>
						<p>
							<span>{com.username.comments}</span> {com.text}
						</p>
					</div>
				))}
			</div>
			<div>
				<input type="text" placeholder="Add a comment..."/>
			</div>
		</div>
	);
}

export default CommentSection;


