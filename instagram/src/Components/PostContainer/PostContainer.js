import React from 'react'
import "./PostContainer.css"

const PostContainer = props => {
    return (
    <div className = "postContainer">
        <div  className = "username">
            <img src = {props.usernameImg} alt = "User Picture" width = "40px" height = "40px"/>
            <h4>{props.username}</h4>
        </div>
        <div className = "userImage">
            <img src = {props.img}/>    
        </div>
        <div className = "commentsLikes">
            <div className = 'icons'>
                <i className = "far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <p className = "likes">{props.likes} likes</p>
        </div>
    </div>
    )
}

export default PostContainer; 