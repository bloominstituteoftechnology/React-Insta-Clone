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
                    <i className="fas fa-compass"></i>
                    <CommentSection comments={post.comments}/>
                    <p>{post.timestamp}</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            );
        }))
}
export default PostContainer;