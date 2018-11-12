import React from 'react';
import CommentContainer from './../CommentSection/CommentContainer';
const PostBody = props => {
    return (
        <>
            <img src={props.post.imageUrl} alt="" />
            <CommentContainer likes={props.post.likes} comments={props.post.comments} />
        </>
    );
};

export default PostBody;
