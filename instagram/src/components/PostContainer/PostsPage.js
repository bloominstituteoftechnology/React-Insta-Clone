import React from 'react';
import PostContainer from './PostContainer'


const PostsPage = (props) => {
    return(
        <PostContainer 
            saveData={props.saveData} 
            key={props.key} 
            id={props.id} 
            postId={props.postId} 
            data={props.data}
            handleCommentChange = {props.handleCommentChange}
            handleLikeClick = {props.handleLikeClick}
            addNewComment = {props.addNewComment}
            newComment = {props.newComment}
            removeComment = {props.removeComment}
        />
    )
}

export default PostsPage;