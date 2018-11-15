import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.section`
	margin: 0;
	padding: 1%;
	border-bottom: 1px black solid;
`;
const CommentDiv = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const CommentUsername = styled.h3`
	margin: 0;
	padding: 1% 0;
	font-size: 1.25rem;
	color: white;
`;
const Span = styled.span`
	font-weight: bold;
`;
const Input = styled.input`
	background: #000000;
	margin: 0;
	padding: 5% 1%;
	width: 100%;
	height: auto;
	border: 1px solid black;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	::placeholder {
		color: white;
	}
	:focus {
		outline: none;
	}
`;
class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			commentInput: '',
			username: props.username,
			text: props.text
		};
	}
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			commentInput: event.target.value
		});
	};

	addComment = (event) => {
		event.preventDefault();
		this.setState({
			comments: [
				...this.state.comments,
				{
					username: localStorage.getItem('username'),
					text: this.state.commentInput
				}
			],
			commentInput: ''
		});
	};

	render() {
		return (
			<React.Fragment>
				<CommentContainer>
					{this.state.comments.map((comment, index) => (
						<CommentDiv className="comment" key={index}>
							<CommentUsername>
								<Span>{comment.username}</Span> {comment.text}
							</CommentUsername>
						</CommentDiv>
					))}
				</CommentContainer>
				<form
					onSubmit={(event) => {
						this.addComment(event);
					}}
				>
					<Input
						type="text"
						name="commentInput"
						placeholder="Add a comment ..."
						value={this.state.commentInput}
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>
				</form>
			</React.Fragment>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		}).isRequired
	),
	commentInput: PropTypes.string,
	AddComment: PropTypes.func,
	handleChange: PropTypes.func
};

export default CommentSection;
