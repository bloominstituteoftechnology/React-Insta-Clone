import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <CommentSection comments={props.object.comments} />
    );
}

export default PostContainer;