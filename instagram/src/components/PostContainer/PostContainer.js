import React from 'react';
import CommentSection from "./../../components/CommentSection/CommentSection";

const PostContainer = props => {

    return (

        <div> 
            <CommentSection text={props.text} username={props.username} />
            </div>

    )

}

export default PostContainer;