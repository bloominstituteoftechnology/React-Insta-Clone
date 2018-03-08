import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


export const PostContainer = (props) => {
    return <CommentSection comments={props.comments} />
}
export default PostContainer;