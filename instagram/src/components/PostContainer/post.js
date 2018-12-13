import React from 'react';
import './posts.css';

import Comments from '../CommentSection/comments';


/*
receives data from posts.js:
    key={post.timestamp}
    user={post.username}
    thumbnail={post.thumbnailUrl}
    postImage={post.imageUrl}
    likes={post.likes}
*/

const Post = props => {
    return (
    <div className="post-section-wrap">

        <div className="post-header">
            <img className="thumbnail-img" src={props.thumbnail} alt="posting user's profile thumbnail    "/>
            <h3>{props.user}</h3>
        </div>

        <div className="post">
            <img className="post-image" src={props.postImage} alt="user posted"/>
        </div>
        
        <div className="comment-section-wrapper">
            <div className = "icons">
                <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
                <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
            </div>
        

            <div className="likes">
                <strong>{props.likes} likes</strong>
            </div>

            <div>
                {props.comments.map( data => <Comments key = {data.key} user={data.username} text={data.text}/>)}
            </div>

            <div className="comment-input">
                <input className="input-comment" type="text" placeholder="Add a comment..." />
            </div>
        </div>
    </div>
    )
}

export default Post