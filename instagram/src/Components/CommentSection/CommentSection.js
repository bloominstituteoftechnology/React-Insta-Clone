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

	render() {
		return (
			<CommentSectionWrapper>
				<Likes likes={this.props.likes} />
				{this.state.comments.map(comment => (
					<Comments comment={comment} />
				))}
				<Input />
			</CommentSectionWrapper>
		)
	}
}

export default CommentSection
