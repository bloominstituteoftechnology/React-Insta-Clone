import React from 'react';

class CommentSection extends React.Component {

	state = {comments: this.props.comments, newComment: ''}


	addComment = (event) => {
		event.preventDefault();
		let commentObj = {username: 'testUser', text: this.state.newComment};
		this.setState({comments: [...this.state.comments, commentObj], newComment: ''});
	}

	handleOnChange = (event) => {
		this.setState({newComment: event.target.value});
	}

	render(){
		return (
			<div className="comments">
				{this.state.comments.map((comment, i)=>{
					return (
						<div className="comment" key={i}>
							<b>{comment.username}</b>: {comment.text}
						</div>
					);
				})}
				<form  className="form" onSubmit={this.addComment}>
					<input value={this.state.newComment} type="text" placeholder="Add a comment..." onChange={this.handleOnChange}></input>
					<button>Add</button>
				</form>
			</div>
		);
	}		
}

export default CommentSection;