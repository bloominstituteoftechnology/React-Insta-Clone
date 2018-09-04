import React from 'react'
import CommentSection from '../Comment/CommenctSection'
import './PostContainer.css'

const PostContainer = (props) => {
    return (
        <div className="Post">
            <div className="PostHeader">
                <img src={props.post.thumbnailUrl} alt="" />
                <p>{props.post.username}</p>
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