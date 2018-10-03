import React from 'react'
import styled from 'styled-components'

const PostHeader = styled.header`
	width: 100%;
	display: flex;
	padding: 3rem 3rem;
`

const PostHeaderImage = styled.div`
	img {
		border-radius: 20rem;
		height: 5rem;
		margin-right: 1.2rem;
	}
`
const PostHeaderUser = styled.div`
	font-size: 2rem;
	font-weight: bold;
	align-self: center;
`
const postheader = props => {
	return (
		<PostHeader>
			<PostHeaderImage>
				<img src={props.userimage} alt="user icon" />
			</PostHeaderImage>
			<PostHeaderUser>{props.username}</PostHeaderUser>
		</PostHeader>
	)
}

export default postheader
