import React from "react";
import CommentSection from '../CommentSection/CommentSectionContainer';

const Post = props => {
    return (
        <div className="App-intro">
            <p>
                <img src={props.thumb} className='thumbnail'/> 
                <span className='thumb-user'>{props.user}</span>
            </p>
            <img src={props.pic} className='image'/>
            <p>{props.like} likes</p>
            <div>
                <CommentSection comment={props.comment} />
            </div>
            <p>{props.time}</p>
        </div>
    )
}

export default Post;