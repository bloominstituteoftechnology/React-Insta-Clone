import React from 'react';

import CommentSection from '../CommentSection/CommentSection'; 

const PostContainer = props => {
    return (
        <div class="postContainer">
            <div class="postContent">
                <p>{props.post.username}</p>
            </div>

            <div class="commentContainer">

            <CommentSection /> 

            </div>
        </div>
    )
}

export default PostContainer; 

