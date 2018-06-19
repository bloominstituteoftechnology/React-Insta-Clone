import React from 'react';
import './PostContainer.css';
import PostInfo from './PostInfo';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return(
        <div>
        <div>
        {props.dummyData.map(post)} => 
        <PostInfo key={post.timestamp} postInfo={post} />
        </div>
        <CommentSection comment={props.dummyData.comments} />
        </div>
        
    )   
}

export default PostContainer;