import React from 'react'
import PostHeader from './PostHeader'
import styled from 'styled-components'
import CommentSection from '../CommentSection/CommentSection'

const PostImageWrapper = styled.div`
	max-width: 100%;

	img {
		width: 100%;
		overflow: hidden;
		display: block;
	}
`
const PostWrapper = styled.div`
	border: 3px solid #d6d4d2;
	margin-bottom: 3rem;
	border-radius: 3px;
	box-shadow: 0 1px 2px #d6d4d2;
`

const post = props => {
	return (
		<PostWrapper>
			<PostHeader
				username={props.post.username}
				userimage={props.post.thumbnailUrl}
			/>
			<PostImageWrapper>
				<img src={props.post.imageUrl} alt="insta images" />
			</PostImageWrapper>
			<CommentSection comments={props.post.comments} />
		</PostWrapper>
	)
}

export default post
