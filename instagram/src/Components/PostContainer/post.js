import React from "react";
import Comments from "../CommentSection/comment";

//post component creates the header for the user post and passes the comment data to the comments component
const Post = (props) => {
    return (
        <>
            <div className="header">
                <img src={props.post.thumbnailUrl} alt="user thumbnail"/>{props.post.username} 
            </div>
                <img src={props.post.imageUrl} alt="user post"/>
                <Comments comment={props.post.comments}/>
        </>
    )
}

export default Post;