import React from 'react';
import CommentSection from './CommentSection'


function PostContainer(props) {
    return props.comments.map(comment => {
        return <CommentSection key={comment.username} comment={comment} />;
    })  
}
export default PostContainer;