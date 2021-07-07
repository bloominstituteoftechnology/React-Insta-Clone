import React from 'react';
import './PostContainer.css';
import PostContainer from './PostContainer';
import CommentSection from '../CommentSection/CommentSection';


const Post = (props) => {
    console.log('postprops', props);
    return (
        <div className="post-div">
            <div className="post-header">
                {props.post.thumbnail}
                {props.post.username}
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="images"/>
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default Post;

//receiving post from 
//passing comment for this post into comment section