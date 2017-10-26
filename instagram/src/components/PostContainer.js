import React from 'react';
import Comments from './CommentSection';

export default ({index, post, addComment}) => (
    <div className="post">
        <header className="post__header">
            <div className="post__thumbnail">
                <img src={post.thumbnailUrl} alt={post.username}/>
            </div>
            <span className="post__username">{post.username}</span>
        </header>
        <div className="post__image">
            <img src={post.imageUrl} alt=""/>
        </div>
        <div className="post__actions">
            <a href="/">like</a>
            <a href="/">comment</a>
        </div>
        <Comments comments={post.comments} addComment={addComment}/>
    </div>
)