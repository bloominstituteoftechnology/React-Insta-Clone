import React, { Component } from 'react';
import moment from "moment";
import './Comments.css'
import Comments from './Comments.js'

class Comment extends Component  {
	constructor() {
		super()
		this.state = {
			
		}
	}
	
	componentDidMount() {
		this.setState({
			likes: this.props.likes,
			comment: ""
		})
	};
	
	submitComment = e => {
		e.preventDefault()
		const newComment = {
			username: "Alex-Ostrander",
			text: this.state.comment
		};
		if (this.state.comment !== "") {
			this.props.comments.push(newComment);
			this.setState({
				comment: ""
			});
		}
	};
	
	inputChange = e => {
		this.setState({
			comment: e.target.value
		});
	};

	submitLikes = e => {
		this.setState(prevState => ({
			likes: this.props.likes + 1
		}));
	}
	
	render() {
		return(
			<div className="commentContainer">
				<div className="bottomIcons">
				  <i class="far fa-heart fa-2x" onClick={this.submitLikes}></i>
				  <i class="far fa-comment fa-2x"></i>
				</div>
				<h3 className="likes">{this.state.likes} likes</h3>
				{this.props.comments.map(data => (
					<Comments username={data.username} text={data.text}/>
				))}
				<p className="timestamp">{this.props.timestamp}</p>
				<form onSubmit={this.submitComment}>
					<input
					  type="text"
				      value={this.state.comment}
					  placeholder="Add a Comment..."
					  className="addComment"
					  id="addComment"
					  onChange={this.inputChange}
					/>
				</form>
			</div>
		)
	}
}


export default Comment;