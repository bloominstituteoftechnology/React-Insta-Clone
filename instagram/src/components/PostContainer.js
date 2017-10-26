import React from 'react';
import moment from 'moment';

import Comments from './CommentSection';
import '../assets/css/post.css';

export default ({index, post, addComment, toggleLike, openOptions}) => {
    let commentBox  = null;
    const focusAddComment = (e) => {
        e.preventDefault();
        if(commentBox) {
            commentBox.focus();
        }
    }

    return (
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
                <a className={`heart ${post.liked ? 'liked' : ''}`} href="/" onClick={toggleLike}><span>like</span></a>
                <a className="comment" href="/" onClick={focusAddComment}><span>comment</span></a>
                <button className="more_options" onClick={openOptions}><span>more options</span></button>
            </div>
            <div className="post__likes">
                <span>{post.likes} likes</span>
            </div>
            <Comments comments={post.comments} addComment={addComment} commentBoxRef={(input) => { commentBox = input} }>
                <div className="post__date">{moment("July 17th 2017, 12:42:40 pm", "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
            </Comments>
        </div>
    )
}