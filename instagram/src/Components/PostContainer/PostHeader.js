import React from 'react';
import styled from 'styled-components';

const PostStyle = styled.section`
	display: flex;
	flex-direction: row;
	width: 20%;
	justify-content: space-between;
`;
const UserImg = styled.img`border-radius: 20px;`;
const PostHeader = (props) => {
	return (
		<PostStyle>
			<img src={props.thumbnailUrl} alt="#" />
			<div>{props.username}</div>
		</PostStyle>
	);
};

export default PostHeader;
