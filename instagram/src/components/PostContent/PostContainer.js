import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainerStyles.css';

const PostContainer = props =>{
    return(
        props.data.map(post => {
            return(
                <div className="post-container" key={post.timestamp}>
                    <div className="user-header">
                        <img alt="user-thumbnail" src={post.thumbnailUrl} className="thumbnail-img" />
                        <p>{post.username}</p>
                    </div>
                    <img alt="user" src={post.imageUrl} />
                    <div className="post-icon">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <p className="num-of-likes">{post.likes} likes</p>
                    <CommentSection comments={post.comments}/>
                    <p className="post-timestamp">{post.timestamp}</p>
                    <input className="comment-form" type="text" placeholder="Add a comment..." />
                </div>
            );
        }))
}
export default PostContainer;