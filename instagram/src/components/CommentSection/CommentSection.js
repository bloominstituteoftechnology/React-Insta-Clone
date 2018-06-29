import React from "react";

class CommentSection extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments: this.props.commentList,
			username:"Guest",
			newComment: ""
		}
	}

	// handle new comments being typed in
	handleNewComment = (event) => {
		this.setState( {newComment: event.target.value });
		console.log(event.target.value);
	}

	// add new comments to a post's list of comments
	addNewComment = () => {
		const commentBox = this.state.comments;
		commentBox.push({username: this.state.username, text: this.state.newComment});
		this.setState({ comments: commentBox, newComment: "" });
	}

	render() {
		// console.log('comments: ', this.state.comments);
	  return(
	    <div>
	    	{this.state.comments.map((comment, index) => 
	    		
	    			<div key={index}><strong>{comment.username}</strong> {comment.text}</div>
					
				)}
				<div>
					<p className="timeStamp"><span>2 hours ago</span></p>
					<form>
						
						<input
						 className="border-right-0 border-left-0 border-bottom-0 py-4"
						 type="text"
						 name="newComment"
						 value={this.state.newComment}
						 onChange={this.handleNewComment}
						 placeholder= "Add a comment..."/>
						<div type="button" onClick={this.addNewComment}>...</div>
					</form>
				</div>
	    </div>
		);
	}
}

export default CommentSection;
