import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostHeader/postheader.js';
import Image from '../Image/Image.js';
import Likes from '../Likes/Likes.js';
import CommentInput from '../CommentInput/CommentInput.js';
import "./Post.css"

const Post = props =>{
    return (
        <div className="instaContain">
            <PostHeader posterHead={props.postData} />
            <Image picture={props.postData} />
            <Likes likeBox={props.postData}/>
            <CommentSection userComments={props.postData.comments}/>
            <CommentInput pewpew={props.postData} />
        </div>
    )
}



export default Post;