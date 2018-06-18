import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection/';

const PostContainer = props => {
    return (
        <div>
            <div>
            {props.dummyData.map (post =>
             < Post key = {post.timestamp} post = {post} />
            )}
            </div>
            <CommentSection comments = {props.dummyData.comments}/>
        </div>
    )
}
 
export default PostContainer;