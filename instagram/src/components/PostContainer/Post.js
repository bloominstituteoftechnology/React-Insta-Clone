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
					<i onClick={()=>{this.props.likeHandler(this.props.post.timestamp)}} class="far fa-heart social-post"/> <i class="far fa-comment social-post" />
					<p>{this.props.post.likes} likes</p>
					<CommentsList comments={this.props.post.comments}/>
					<AddComment commentHandler={this.props.commentHandler} postId={this.props.post.timestamp}/>
				</div>
			</div>
		);
	}
}

export default Post;