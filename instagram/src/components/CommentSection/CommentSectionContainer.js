import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import './CommentSection.css';
import CommentInput from'./CommentInput';

class CommentSection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: props.comments
		};
	}

	render() {
		return (
			<div>
				{this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
				<CommentInput addNewComment={this.addNewComment} />
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({ text:PropTypes.string, username:PropTypes.string })
	)
};

export default CommentSection;