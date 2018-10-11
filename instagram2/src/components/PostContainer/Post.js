import React from 'react';
import './PostContainer.css';
import './PostContainer';
import CommentSection from '../CommentSection/CommentSection';


const Post = (props) => {
    console.log('postprops', props);
    return (
        <div className="post-div">
            <CommentSection comments={props.post.comments}/>
        </div>
    )
}

export default Post;

//passing comment for this post into comment section