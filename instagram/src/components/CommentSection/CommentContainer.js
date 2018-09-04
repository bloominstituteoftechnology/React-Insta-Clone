import React from 'react';
import CommentIcons from './CommentIcons';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';

function CommentContainer(props) {
    return(
        <div>
            <CommentIcons />

            {props.posts.map(post => (
                <CommentLikes 
                    likes = {post.likes}
                />
            ))}

            {props.posts.map(post => (
                <Comment 
                    commentName = {post.comments.username}
                    commentText = {post.comments.text}
                />
            ))}

            {props.posts.map(post => (
                <Timestamp 
                    timestamp = {post.timestamp}
                />
            ))}

            <CommentInput />
        </div>
    );
}

export default CommentContainer;