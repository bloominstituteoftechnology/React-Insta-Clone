import React from 'react'
import Comments from './Comments';

function Post(props) {
    return (
        <div className="postContainer">

        <div className="user">
            <p>{props.info.username}</p>
            <img src= {props.info.thumbnailUrl} className="thumbnail" alt="usertumbnail" />
        </div>
        <div className="user-Post">
        <img src= {props.info.imageUrl} className="post-pic" alt="users-post" />
        </div>

        <div className="icons">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        </div>

        <div className="likes">
         <p>{props.info.likes} Likes </p>

        </div>

        {props.info.comments.map (comment => (
            <Comments key={comment.text} comment={comment} />
        ))}


        </div> //main div
            

    )}

    export default Post