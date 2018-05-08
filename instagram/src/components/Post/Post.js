import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Header from '../Header/Header';
import PostImage from '../Post-Image/Post-Image';
import Likes from '../Likes/Likes';
import CommentInput from '../Comment-Input/Comment-Input';
import "./Post.css"


const Post = props => {
    return(
        <div className="insta-post">
            <Header dummyData={props.postData} />
            <PostImage dummyData={props.postData} />
            <Likes likeNum={props.postData.likes} />
            <CommentSection comments={props.postData.comments} />
            <CommentInput timeStamp={props.postData.timestamp} />
        </div>
    )
}

export default Post;