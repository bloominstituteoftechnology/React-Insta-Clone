import React from 'react';

const Post = props => {
    return (
        <div className = "post-content">
            <div className = "post-header">
                <img className = "thumb-img" src = {props.thumbImg}/>
                <span className = "header-username">{props.name}</span>
            </div>
            <div className = "post">
                <img className = "main-img" src = {props.mainImg}/>
                <div className = "icons">
                    <i className = "far fa-heart fa-2x"></i>
                    <i className = "far fa-comment fa-2x fa-flip-horizontal"></i>
                </div>
                <span className = "likes">{props.likes} likes</span>
            </div>
        </div>
    )
}

export default Post