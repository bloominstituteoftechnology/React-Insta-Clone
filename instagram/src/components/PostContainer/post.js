import React from 'react';
import CommentSection from './CommentSection';

const Post = (props) => {
    return (
        <div >
            <img src = {props.userName.thumbnailUrl} alt = 'user profile'/>
            <p>{props.userName.username}</p>
            <img src = {props.userName.imageUrl} alt ='user post' />
            <CommentSection comment ={props.userName} />
            
        </div>
    );
}

export default Post;

