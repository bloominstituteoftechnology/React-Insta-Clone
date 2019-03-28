import React from 'react'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import CommentInput from "../CommentSection/CommentInput";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainers.scss';
import PropTypes from "prop-types"

import moment from 'moment'

const PostItem = (props)=>{
	return (
		<div className="postItemContainer">
			<PostHeader {...props}/>
			<img className="heroImage" src={props.imageUrl} alt="hero"/>
			<div className="bottomContentContainer">
				<PostLikes onLikeClick={e => props.onLikeClick(e, props.id)}
						   likes={props.likes}
						   likedPosts={props.likedPosts}
						   postId={props.id}/>
				<CommentSection
					comments={props.comments}
					postId={props.id}
					onDeleteComment={props.onDeleteComment}/>`
				<time>{moment().startOf('day').fromNow().toUpperCase()}</time>
			</div>
			<CommentInput onAddComment={props.onAddComment}
						  postId={props.id}/>
		</div>
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

