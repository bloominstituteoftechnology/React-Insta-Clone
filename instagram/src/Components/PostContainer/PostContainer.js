import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const Test = styled.div`
	max-width: 55rem;
	margin: 0 auto;
`

const postcontainer = props => {
	return (
		<Test>
			{props.posts.map(post => (
				<Post post={post} key={post.imageUrl} />
			))}
		</Test>
	)
}

export default postcontainer
