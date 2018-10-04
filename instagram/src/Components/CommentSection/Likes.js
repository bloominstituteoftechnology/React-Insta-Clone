import React, { Component } from 'react'
import styled from 'styled-components'

const LikesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const IconWrapper = styled.div`
	display: flex;
	.hearts {
		font-size: 3.5rem;
		display: inline-block;
		padding: 0 1.5rem;
	}

	.comment-bubble {
		font-size: 3.5rem;
		display: inline-block;
	}
`

const LikesText = styled.div`
	display: flex;
	padding: 0.5rem 1.5rem;

	.likes-text {
		display: inline-block;
		font-size: 1.6rem;
		font-weight: bold;
		align-self: flex-end;
	}
`

class Likes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			likes: props.likes
		}
	}

	render() {
		return (
			<LikesWrapper>
				<IconWrapper>
					<span className="hearts">
						<i className="far fa-heart" />
					</span>
					<span className="comment-bubble">
						<i className="far fa-comment" />
					</span>
				</IconWrapper>
				<LikesText>
					<span className="likes-text">{this.state.likes} likes</span>
				</LikesText>
			</LikesWrapper>
		)
	}
}

export default Likes
