import React from 'react'
import Comment from './Comment.js'
import CommentInput from './CommentInput.js'

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments,
			comment:''
		}
		console.log(this.props)
	}


	commentHandler = e => {
		this.setState({ comment: e.target.value});
	}

	handleCommentSubmit = e => {
		e.preventDefault();
		const newComment = {text: this.state.comment,
							username: 'dlimla'};
		const comments = this.state.comments.slice();
		comments.push(newComment);
		this.setState( {comments, comment: ''})

	}

	render() {
		return (
			<div>
				{this.state.comments.map((c,i) => 
						<Comment 
							key={i} 
							comment ={c} 
						/>
					)
				}

				<CommentInput 
					comment={this.state.comment}
					submitComment ={this.handleCommentSubmit}
					changeComment={this.commentHandler}/>
			</div>
		)
	}
}


export default CommentSection;