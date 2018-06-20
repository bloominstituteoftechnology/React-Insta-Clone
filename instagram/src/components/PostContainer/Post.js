import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props => {
    return (
        <div>
            <div className="post-border">
                <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            </div>
            <div className="post-image">
                <img alt="post thumbnail" className="post-image" src={props.post.imageUrl} />
            </div>
            <div className="likes">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <p className="likes">{`${props.post.likes} likes`}</p>
            </div>
            <div className="comment-section">
                <CommentSection comments={props.post.comments} likes={props.post.likes} />
            </div>
        </div>
    )
}
    


export default Post;