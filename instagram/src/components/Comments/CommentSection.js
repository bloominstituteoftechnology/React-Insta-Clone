import React, { Component } from 'react';
import Moment from 'react-moment';

import './CommentSection.css';

class CommentSection extends Component {

	constructor(props) {
		super();

		this.state = {
			username: "cgroov",
			comments: []
		}
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
	}

	addComment = (event) => {
		if (event.keyCode === 13) {
			const newComment = {
				username: this.state.username,
				text: this.input.value
			}

			this.setState({
				comments: [...this.state.comments, newComment]
			})

			this.input.value = "";
		}
	}

	render () {
		const timestamp = this.props.timestamp;
		return (
			<div className="Comments">
				<div className="Comments-list">
					{this.state.comments.map((comment) => {
						return (
							<div className="Comment">
								<h4 className="Comment-user">{comment.username}</h4>
								<p className="Comment-body">{comment.text}</p>
							</div>
						);
					})}
				</div>

				<div className="Comments-time">
					<Moment parse="hh:mm:ss" fromNow>{this.props.timestamp}</Moment>
				</div>

				<div className="Comments-add">
					<input className="Comments-addField" type="text" onKeyDown={this.addComment} ref={input => this.input = input} placeholder="Add a comment..."></input>
				</div>
			</div>
		);
	}
};

export default CommentSection;