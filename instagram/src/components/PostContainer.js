import React from 'react';
import CommentSection from './CommentSection'


function PostContainer(props) {

    return (
        <div>
        <img src={props.obj.imageUrl} />
        <CommentSection comments={props.obj.comments} />
        </div>
        )
}
export default PostContainer;