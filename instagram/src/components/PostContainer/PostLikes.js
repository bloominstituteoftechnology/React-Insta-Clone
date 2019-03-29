import React from 'react'
import './PostContainers.scss';
import styled from 'styled-components'
import {Button} from "../Styles/Reusables/Button";
import {Icon} from "../Styles/Reusables/Icon";

const PostLikeContainer = styled.div`
	   margin-top: 8px;
	   text-align: left;
	   padding: 12px 20px;
`

const LikeText = styled.p`
	 margin-top: 8px;
     font-size:1.1rem;
     font-weight: bold;
`



const PostLikes = (props)=>{
	const getLikedElement = ()=>{
		if(props.likedPosts[props.postId]){
			return <Icon className="fas fa-heart" color="red"/>
		}else{
			return <Icon className="far fa-heart"/>
		}
	}
	return (
		<PostLikeContainer>
			<Button onClick={props.onLikeClick}>{getLikedElement()}</Button>
			<Button><Icon className="far fa-comment-alt"/></Button>
			<LikeText>{props.likes} likes</LikeText>
		</PostLikeContainer>
	)
}

export default PostLikes

