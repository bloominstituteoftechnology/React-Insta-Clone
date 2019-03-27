import React from "react";

class CommentInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: "",
			list: props.props.comments,
			props: props
		};
	}

	handlesChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitComment = e => {
		e.preventDefault();
		this.props.addComment(this.state.comment);
		this.setState({ comment: "" });
	};

	render() {
		return (
			<div className='inputComment'>
				<form onSubmit={this.submitComment}>
					<input
						type='text'
						name='comment'
						value={this.state.comment}
						onChange={this.handlesChanges}
						placeholder='Add a comment...'
					/>
				</form>
			</div>
		);
	}
}

export default CommentInput;
