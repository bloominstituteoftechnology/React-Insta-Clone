import React from 'react'
import styled from "styled-components";
import './PostContainers.scss';
import {UserThumbnail} from "../Styles/Reusables/UserThumbnail";
import {UserName} from "../Styles/Reusables/UserName";


export const PostHeaderContainer = styled.header`
	  display:flex;
	  align-items: center;
	  text-align: left;
	  padding: 12px 24px;
	  color: #222;
`


export const BoldUsername = styled(UserName)`
	font-weight:bold;
`


const PostHeader = (props)=>{
	return (
		<PostHeaderContainer>
			<UserThumbnail src={props.imageUrl} alt="user"/>
			<BoldUsername>{props.username}</BoldUsername>
		</PostHeaderContainer>
	)
}

export default PostHeader

