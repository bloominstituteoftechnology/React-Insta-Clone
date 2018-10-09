import React from 'react';
import MoreOption from '../Images/MoreOption.js';
import moment from 'moment';

const CommentSection = (props) => {
	return (
		<div className="addComment" key={moment().startOf('day').fromNow()}>
			<form action="submit">
				<input type="text" placeholder="Add a comment..." onChange={props.changeHandler} name="comment" />
			</form>
			<MoreOption />
		</div>
	);
};

export default CommentSection;
