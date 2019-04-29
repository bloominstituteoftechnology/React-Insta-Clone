import React from 'react';
import Comment from '../CommentSection/Comment';

const PostContainer = props => {
    return (
        <div>
            {props.data.comments.map(comment => <Comment username={comment.username} text={comment.text} />)}
        </div>
    );
}

export default PostContainer;