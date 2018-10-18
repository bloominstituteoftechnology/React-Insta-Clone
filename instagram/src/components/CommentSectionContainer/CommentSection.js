import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
	constructor(props) { //receives props from state on App.js
		super(props);
		this.state = {
			comments: props.comments, //gets comment from state as props
			comment: '' //controlled input
		};
	}

	addNewComment = event => {
		this.setState({ comment: event.target.value});
	};

	commentSubmit = event => {
		event.preventDefault();
		//build out comment object
		const newComment= { text: this.state.comment, username: 'Batman' };
		//clone object array
		const comments = this.state.comments.slice();
		//push object into new clone
		comments.push(newComment);
		//set new clone as state.. and reset our comment string
		this.setState({ comments: comments, comment: ''});
	};



	render() {
		return (
			<div>
				{this.state.comments.map((comment, index) => 
					<Comment
						key={index}
						comment={comment}
					/>
				)}
				<CommentInput 
					submitHandler={this.commentSubmit}
					addNewComment={this.addNewComment} 
					comment={this.state.comment}
				/>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			username: PropTypes.string
		})
	)
};

export default CommentSection;
