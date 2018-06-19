import React from 'react'


const PostHeader = props => {
    return (
        <div>
            <div className="top-container">
                <h1><img className="thumb-pic" src={props.postThumb} alt="thumb"></img>&nbsp;&nbsp;
                 {props.postStarter}</h1>
            </div>
            <img className="top-picture" src={props.postImage} alt="post-img"></img>
        </div>
    )
}

export default PostHeader;