import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	background: red;
	flex-direction: column;
	align-items: center;
`;
const PostContainer = (props) => {
	return <Wrapper>{props.posts.map((mustafa) => <Post key={mustafa.imageUrl} post={mustafa} />)}</Wrapper>;
};
export default PostContainer;
