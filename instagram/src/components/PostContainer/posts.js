import React from 'react';
import Comments from '../CommentSection/comments';

/* Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component. */

const Posts = props => {
    return (
        <div>
            <h1>Filler</h1>
            <Comments />
        </div>
    )
}

export default Posts