import React from 'react';

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
            <img src={props.thumbnail} alt="posting user's profile thumbnail    "/>
            <h3>{props.user}</h3>
        </div>

        <div className="post">
            <img src={props.postImage} alt="user posted"/>
        </div>
        
        <div className = "icons">
            <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
            <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
        </div>

        <div>
            {props.likes} likes
        </div>

        <div>
            {props.comments.map( data => <Comments key = {data.key} user={data.username} text={data.text}/>)}
        </div>
        
    </div>
    )
}

export default Post