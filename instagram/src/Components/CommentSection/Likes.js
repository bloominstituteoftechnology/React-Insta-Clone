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

	.red {
		color: red;
	}

	.black {
		color: #000;
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
			likes: props.likes,
			isLiked: false
		}
	}

	liked = event => {
		event.preventDefault()
		let liked = this.state.likes
		liked += 1
		this.setState({ isLiked: true, likes: liked })
		console.log('liked')
	}

	notLiked = event => {
		event.preventDefault()
		let notLiked = this.state.likes
		notLiked -= 1
		this.setState({ likes: notLiked, isLiked: false })
	}

	render() {
		let likes
		if (this.state.isLiked === true) {
			likes = (
				<span className="hearts red">
					<i onClick={this.notLiked} className="far fa-heart" />
				</span>
			)
		} else if (this.state.isLiked === false) {
			likes = (
				<span className="hearts black">
					<i onClick={this.liked} className="far fa-heart" />
				</span>
			)
		}
		return (
			<LikesWrapper>
				<IconWrapper>
					{likes}
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
