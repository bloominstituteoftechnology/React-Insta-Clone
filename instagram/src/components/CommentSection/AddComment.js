import React, { Component } from 'react';

class AddComment extends Component {
	constructor(props){
		super(props);
		this.state = {
			comment: '',
		}
	}
	onSubmit=(event)=>{
		event.preventDefault();
		this.props.commentHandler(this.props.postId, this.state.comment);
		this.setState({comment: ''});
	}
	onChangeHandler =(event)=>{
		this.setState({comment: event.target.value});
	}
	render() {
		return (
			<div className="add-comment">
				<form className="comment-form" onSubmit={this.onSubmit}>
					<input placeholder="Add a comment..." onChange={this.onChangeHandler} value={this.state.comment}/>
				</form>
			</div>
		);
	}
}

export default AddComment;