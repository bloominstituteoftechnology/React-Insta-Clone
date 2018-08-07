import React from "react";
import Header from './Header';

import "./PostContainer.css"
const NewPost = props => {
    return (
        <div className="post-wrapper">
            <Header
                username={props.dummyData.username}
                thumbnailUrl={props.dummyData.thumbnailUrl}
            />
            <div className="img-wrapper">
            <img 
            alt="post-image"
            className='new-post'
            src={props.dummyData.imageUrl}
            />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}


export default NewPost;