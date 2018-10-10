import React from 'react';
import '../ig.css'
const PostContainer = props => {
    console.log(props.postObject.comments);
    return (
        // postCard
        <div className="postCard">
            Hello {props.postObject.username}
            {/* {props.postObject.map (post => <CommentComponent/> )} */}
            {props.postObject.timestamp}
        </div>
    )
}

export default PostContainer;