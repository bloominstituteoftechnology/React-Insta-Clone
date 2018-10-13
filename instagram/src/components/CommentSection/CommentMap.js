import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './index.css';

const CommentSectionDiv = styled.div`
	padding-left: 20px;
`;

const InteractiveButtonsDiv = styled.div`
	display: flex;
	justify-content: flex-start;
`;


const LikeImg = styled.img`
	cursor: pointer;
	height: 40px;
	padding-right: 20px;
`;

const SpeechBubble = styled.img`
	cursor: pointer;
	height: 40px;
`;

const Likes = styled.div`
	font-size: 1.0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: grey;
	margin-top: 10px;
`;

const Timestamp = styled.div`
	font-size: .8rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: grey;
	margin-top: 10px;
`;

const CommentForm = styled.form`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	height: 50px;
	margin-bottom: 25px;
	margin-top: 10px;
`;

const CommentInput = styled.input`
	font-size: 1.0rem;
	border: 0px solid;
	border-top: 1px solid lightgrey;
	outline: none;
	height: 32px;
	width: 90%;
	padding-top: 10px;
`;

const OptionsButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border: 0px solid;
	font-weight: bold;
	padding-right: 3%;
	font-size: 1.5rem;
	border-top: 1px solid lightgrey;
	outline: none;
	cursor: pointer;
	height: 100%;
	width: 10%;
`;

class CommentMap extends React.Component {
	constructor() {
		super();

		this.state = {
			comments: [],
			newCommentText: '',
			liked: false,
		};
	}

	componentDidMount() {
		this.setState({ timestamp: this.props.userData.timestamp, comments: this.props.comments, likes: this.props.userData.likes, liked: false, newComment: this.state.newComment, });
	}

	
	addNewComment = (event) => {
		event.preventDefault();
		const username = 'User 1';
		const text = this.state.newCommentText;

		if(text !== '') {
			this.setState({
				comments: [...this.state.comments, { username, text }],
				newCommentText: '',
			});
		}

		else {
			alert('You are trying to send an empty comment');
		}
	};

	handleChange = (event) => {
		this.setState({ newCommentText: event.target.value });
	}

	likePost = () => {
		let liked = this.state.liked;
		if (liked === false) {
			this.setState({ likes: this.state.likes + 1});
			this.setState({ liked: true });
		}
		else if (liked === true) {
			this.setState({ likes: this.state.likes - 1 });
			this.setState({ liked: false });
		}
	};

	
	render() {
		return (
			<CommentSectionDiv>
				<InteractiveButtonsDiv>
					<LikeImg src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' onClick ={this.likePost}  className='like-icon' />
					<SpeechBubble src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
				</InteractiveButtonsDiv>

				<Likes>
					<p>{this.state.likes} likes</p>
				</Likes>

				{this.state.comments.map((comment) => <CommentSection comment={comment} />)}
				
				<Timestamp>
					<p>{this.state.timestamp}</p>
				</Timestamp>

				<CommentForm onSubmit={this.addNewComment} >
					<CommentInput type='text' placeholder='Add a comment' value={this.state.newCommentText} onChange={this.handleChange} />
					<OptionsButton>&#8230;</OptionsButton>
				</CommentForm>
			</CommentSectionDiv>
		)
	}
}

CommentMap.proptypes = {
	comment: PropTypes.object.isRequired,
}

export default CommentMap;