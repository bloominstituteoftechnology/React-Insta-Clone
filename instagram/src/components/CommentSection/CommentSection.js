import React, { Component } from 'react';
import Comment from "./Comment";
import "../../App.css";
import PropTypes from 'prop-types';


class CommentSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dummyData: this.dummyData,
			counter: 0,
			display: false,
			newComment: "",
			comments: this.props.comments
		};

	}
	menu = event => {
		event.preventDefault();
		if (this.state.display) {
			this.setState({ display: false })
		} else { this.setState({ display: true }) }
	}

	increment = event => {
		event.preventDefault();
		this.setState(prevState => ({ counter: prevState.counter + 1 }));
		console.log("counter: " + this.state.counter)
	};

	addNewComment = event => {
		event.preventDefault();
		/* this.setState( () => { */
//*****I have the newComment here through state */
//****I also have the index here through event.target.name */
//*****I need to add the comment to the array using the index */
		console.log(this.state.newComment)
		console.log("keyIndex:" + event.target.name)
	}

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });	
	};

	render() {
		let classNames = require('classnames');

		let navClass = classNames({
			menu: true,
			'visible': this.state.display
		})
		return (
			<div className="userCommentContainer">  {this.props.comments.map((comment, index) => {
				return <Comment user={comment.username} comments={comment.text} key={index} />;
			})}
				<div className="timeStamp">{this.props.timeStamp}</div>
				<footer className="addCommentContainer">
					<nav className={navClass} >
						<ul className="menuList">
							<li className="menuAnchor" onClick={this.menu}>Report</li>
							<li className="menuAnchor" onClick={this.menu}>Embed</li>
							<li className="menuAnchor" onClick={this.menu}>Share</li>
							<li className="menuAnchor" onClick={this.menu}>Copy Link</li>
							<li className="menuAnchor" onClick={this.menu}>Cancel</li>
						</ul>
					</nav>

					<form onSubmit={this.addNewComment} name={this.props.keyIndex}>
						<input
							className='addComment2'
							placeholder="Add comment..."
							type="text"
							id="inp2"
							name="newComment"
							value={this.state.newComment}
							onChange={this.handleInputChange}
						/>
					</form>
					<div className="button"
						type="button"
						id="commentDots"
						onClick={this.menu}> </div>
				</footer>


			</div>

		);
	};
}
/* CommentSection.propTypes = {
	comment: PropTypes.arrayOf(
		PropTypes.shape({
			user: PropTypes.array,
			comments: PropTypes.array,
			key: PropTypes.number
		})
			.isRequired
	)
} */
export default CommentSection;
