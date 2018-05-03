import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <CommentSection comments={props.postData.comments} />
    )
}

export default Post;