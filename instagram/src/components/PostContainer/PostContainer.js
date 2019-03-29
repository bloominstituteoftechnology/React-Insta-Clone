import React from 'react'
import './PostContainers.scss';
import PostItem from "./PostItem";
import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
`


const PostContainer = (props)=>{
	return (
		<PostHeaderContainer >
			{props.postList.map(el =>
				<PostItem {...el} key={el.id}
					 onAddComment={props.onAddComment}
					 onLikeClick={props.onLikeClick}
					 onDeleteComment={props.onDeleteComment}
					 likedPosts = {props.likedPosts}
					 />)
			}
		</PostHeaderContainer>
	)
}


export default PostContainer

