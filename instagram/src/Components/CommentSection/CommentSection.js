import React, { Component } from 'react'
import Comments from './Comments'
import styled from 'styled-components'
import Likes from './Likes'
import Input from './Input'

const CommentSectionWrapper = styled.section`
	max-width: 100%;
	margin: auto;
	padding: 2rem 0;
`

class CommentSection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: props.comments
		}
	}

	addComment = newcomment => {
		const commentAdded = this.state.comments
		localStorage.setItem('username', 'rhcprocker')
		const instagramUser = localStorage.getItem('username')
		commentAdded.push({ username: instagramUser, text: newcomment })
		this.setState({
			comments: commentAdded
		})
	}

	render() {
		return (
			<CommentSectionWrapper>
				<Likes likes={this.props.likes} />
				{this.state.comments.map((comment,index) => (
					<Comments key={index} comment={comment} />
				))}
				<Input addComment={this.addComment} />
			</CommentSectionWrapper>
		)
	}
}

export default CommentSection
