import React from "react";
// import PostContainer from "./src/components/PostContainer/PostContainer";

class CommentSection extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments:[],
			username:"Guest",
			newComment: ""
		}
	}

	// handle new comments being typed in



	// add new comments to a post's list of comments


	render() {
		console.log('comments: ', this.state.comments);
	  return(
	    <div>
	    	{this.props.commentList.map((comment, index) => (
	    		[
	    			<div>{comment.username}</div>,
	    			<div>{comment.text}</div>
					]
				))}
				<div>
					<form>
						<input
						 type="text"
						 name="newComment"
						 value={this.state.newComment}
						 onChange={this.handleNewComment}
						 placeholder= "Add a comment..."/>
						<button type="button" onClick={this.addNewComment}>...</button>
					</form>
				</div>
	    </div>
		);
	}
}

export default CommentSection;
