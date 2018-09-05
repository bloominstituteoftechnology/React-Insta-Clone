import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props =>{
    return (
        <div className="post">
            <PostHeader 
                thumbnailUrl={props.post.thumbnailUrl}
                username={props.post.username}/>

            <img    className="post-image" 
                    src={props.post.imageUrl} 
                    alt=""/>

            <div className="likes">{props.post.likes+' likes'}</div>

            <CommentSection 
                comments={props.post.comments} 
                // addNewComment={props.addNewComment} handleInputComment={props.handleInputComment}
            />
        </div>
    );
}

export default Post;