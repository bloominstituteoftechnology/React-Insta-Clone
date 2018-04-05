import React from "react";
// import PostContainer from "./src/components/PostContainer/PostContainer";

class CommentSection extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments:[],
			username:"Guest"
		}
	}
	
	render() {
  return(
    <div>
    	{this.props.commentList.map((comment, index) => (
    		[
    			<div>{comment.username}</div>,
    			<div>{comment.text}</div>
					    		]
			))}
			<div><form><input type="text" placeholder= "Add a comment..."/><button type="button" onClick={this.addNewComment}>...</button></form></div>
    </div>

	);
	}
}

export default CommentSection;
