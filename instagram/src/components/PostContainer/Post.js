import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props){
    return(
        <div>
            <h2>{props.username}</h2>
            <img src={props.thumbnail} alt="#"></img>
            <img src={props.image} alt="#"></img>
            <p>Likes: {props.likes}</p>
            <p>time posted: {props.timestamp}</p>
            <CommentSection comments={props.comments} postIndex={props.index}/>
        </div>
    );
}

export default PostContainer;