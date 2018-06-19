import React from 'react';
import './PostContainer.css';
import PostInfo from './PostInfo';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return(
        <div className="post-container">
        {props.dummyData.map((post) => {
          return (
            <div>
            <PostInfo key={post.timestamp} postInfo={post} />
            <CommentSection comments={post.comments} /> 
            </div>
          )
        })}
        </div>
    )   
}



export default PostContainer;