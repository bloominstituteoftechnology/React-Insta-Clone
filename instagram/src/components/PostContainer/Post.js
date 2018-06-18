import React, { Component } from 'react';
import AddComment from '../CommentSection/AddComment';
import CommentsList from '../CommentSection/CommentsList'

class Post extends Component {
	constructor(props){
		super(props);
	}
	render() {
		console.log(this.props)
		return (
			<div className="post">
				<div className="post-header">
					<img src={this.props.post.thumbnailUrl} alt=""/>
					<h3>{this.props.post.username}</h3>
				</div>
				<img src={this.props.post.imageUrl} alt=""/>				
				<div className="comment-container">
					<p>Like Comment</p>
					<p>{this.props.post.likes} likes</p>
					<CommentsList comments={this.props.post.comments}/>
					<AddComment />
				</div>
			</div>
		);
	}
}

export default Post;