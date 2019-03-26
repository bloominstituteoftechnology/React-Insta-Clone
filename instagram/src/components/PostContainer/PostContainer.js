import React from 'react'
import './PostContainers.scss';
import PostItem from "./PostItem";
const PostContainer = (props)=>{
	return (
		<div className="postListContainer">
			{props.postList.map(el =>
				<PostItem {...el} key={el.id} onAddComment={props.onAddComment}/>)
			}
		</div>
	)
}


export default PostContainer

