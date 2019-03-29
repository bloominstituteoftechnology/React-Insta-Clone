import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import CommentInput from "../CommentSection/CommentInput";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainers.scss';
import PropTypes from "prop-types"

import moment from 'moment'

export const PostItemContainer = styled.div`
	  max-width: 1000px;
	  text-align: center;
	  border: 1px solid #888;
	  margin-bottom:60px;
`

export const HeroImage = styled.img`
	 width: 100%;
     max-height: 500px;
`

export const BottomContentContainer = styled.div`
	  text-align:left;

`

export const Time = styled.time`
	  display: inline-block;
      margin: 4px 20px 10px 20px;
      font-size: 0.8rem;
      color: rgba(0,0,0, 0.4);
`


const PostItem = (props)=>{
	return (
		<PostItemContainer>
			<PostHeader {...props}/>
			<HeroImage src={props.imageUrl} alt="hero"/>
			<BottomContentContainer>
				<PostLikes onLikeClick={e => props.onLikeClick(e, props.id)}
						   likes={props.likes}
						   likedPosts={props.likedPosts}
						   postId={props.id}/>
				<CommentSection
					comments={props.comments}
					postId={props.id}
					onDeleteComment={props.onDeleteComment}/>`
				<Time>{moment().startOf('day').fromNow().toUpperCase()}</Time>
			</BottomContentContainer>
			<CommentInput onAddComment={props.onAddComment}
						  postId={props.id}/>
		</PostItemContainer>
	)
}

PostItem.propTypes ={
	id:PropTypes.string,
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			id:PropTypes.id,
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
}

export default PostItem

