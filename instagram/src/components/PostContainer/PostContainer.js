import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
const PostContainer = props =>{
    return(
        <div className = "post">
            <div className = "post-header">
                <img 
                    src ={props.post.thumbnailUrl}
                    alt = ''
                    className = 'post-username-img'
                />
                <h1 className = "post-username">{props.post.username}</h1>
            </div>
            
            <div className = 'comment-section'>
                <img className="post-img" src={props.post.imageUrl} alt="" />
                <div className ="comment-bottom">
                    <h1 className = 'likes'>{props.post.likes} likes</h1>
                    <CommentSection className="comment-section" comments={props.post.comments} />
                </div>
            </div>
        </div>
    )
    
}
PostContainer.propTypes ={
    post: PropTypes.object
}

export default PostContainer;