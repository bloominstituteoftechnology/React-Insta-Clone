import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return(
        <div className="post-container">
            {props.posts.map(post => {
                return (
                    <div className="post" key={post.timestamp}>
                        <img src={post.thumbnailUrl} alt="thumbnail of user"/>
                        <p>{post.username}</p>
                        <img src={post.imageUrl} alt="user's beautiful post" />
                        <p>{post.likes}</p>
                        <CommentSection comments={post.comments} />
                        <p>{post.timestamp}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;