import React from 'react'
import CommentSection from '../Comment/CommenctSection'
import './PostContainer.css'

const PostContainer = (props) => {
    return (
        <div className="Post">
            <div className="PostHeader">
                <img src={props.post.thumbnailUrl} alt="" />
                <h2>{props.post.username}</h2>
            </div>
            <div className="PostImage">
                <img src={props.post.imageUrl} alt="" />
            </div>
            <div className="CommentsSection">
                <CommentSection comments={props.post.comments} />
            </div>
        </div>
        
    )
}

export default PostContainer