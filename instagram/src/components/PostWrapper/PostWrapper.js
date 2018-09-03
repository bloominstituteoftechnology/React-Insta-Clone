import React from 'react';
import PostContainer from '../../components/PostContainer/PostContainer';
import CommentContainer from '../../components/CommentSection/CommentContainer';
import './PostWrapper.css'

const PostWrapper = (props) => {
    return (
        <div className="post-wrapper">
            <PostContainer thumbImg={props.data.thumbnailUrl} imgageU={props.data.imageUrl} likes={props.data.likes} userN={props.data.username}/>
            <CommentContainer comments={props.data.comments}/>
        </div>
    )
}

export default PostWrapper;