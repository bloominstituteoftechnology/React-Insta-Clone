import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
        
        {props.postData.map(post => {
            return (
            <div className="post">
                <PostHeader 
                username={post.username} 
                thumbnail={post.thumbnailUrl}
                />
                
                <div className="content-img">
                    <img src={post.imageUrl} />
                </div>

                <CommentSection 
                likes={post.likes} 
                comments={post.comments}
                />

            </div>
            )
        }
        )}
      </div>

    );
}

export default PostContainer;