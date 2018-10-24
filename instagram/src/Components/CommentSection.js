import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Components/Comment';
import CommentInput from './Components/CommentInput';



class CommentSection extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			comments: props.comments, 
			comment: '',
		};
	}

	addNewComment = event => {
		this.setState({ comment: event.target.value});
	};

	commentSubmit = event => {
		event.preventDefault();
	
		const newComment= { text: this.state.comment, username: 'Batman' };
		
	const comments = this.state.comments.slice();
		
		comments.push(newComment);
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