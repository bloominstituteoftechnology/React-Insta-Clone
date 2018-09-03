import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {

    // Each PostContainer component will then pass the array of 
    // comments on each post object as a prop to an instance of the CommentSection component.
    return (
        <div>
        <CommentSection comments={props.data.comments} />
        </div>
    )
}

export default PostContainer;