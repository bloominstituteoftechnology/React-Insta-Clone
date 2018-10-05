import React, { Component } from 'react';
import './CommentSection.css';
import ActualComment from './Comment';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comment,
			newComment: ''
		};
	}
	commentInput = e => {
		this.setState({ newComment: e.target.value });
	};
	preventDefault = event => {
		event.preventDefault();
  };
  
  clearForm = () => {
    this.setState({
    newComment: ''
    })
  }
	addNewComment = event => {
    event.preventDefault();
    const empty = '';
		const userName = 'Michael';
		const nComment = { text: this.state.newComment, username: userName };
		const commentList = this.state.comments.slice();
		commentList.push(nComment);
		this.setState({
			comments: commentList
    });
    this.clearForm()
	};
	render() {
		return (
			<div>
				{this.state.comments.map(item => {
					return (
						<div>
							<ActualComment
								key={Math.random()}
								commentData={item}
								username={'Michael'}
							/>
						</div>
					);
				})}
				<p className="postTime">Posted: {this.props.time}</p>

				<div className="addCommentContainer">
				
						<input
              onChange={this.commentInput}
              onKeyPress={this.addNewComment}
							type="text"
							placeholder="Add Comment..."
							className="addComment"
						/>
				

					<i class="fas fa-ellipsis-h" />
				</div>
			</div>
		);
	}
}

export default CommentSection;
