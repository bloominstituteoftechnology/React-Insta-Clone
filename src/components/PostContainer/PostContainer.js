import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="top-container">
                <h1><img className="thumb-pic" src={props.postThumb} alt="thumb"></img>&nbsp;&nbsp;
            {props.postStarter}</h1>
            </div>

            <img className="top-picture" src={props.postImage} alt="post-img"></img>
            <div className="comment-container">
                <div>
                    {props.postComments.map(post => (
                        <CommentSection key={Math.random()} postComments={post.text} postUser={post.username} />
                    ))}
                </div>
                <div>
                    <input className="comment-bar" type="text"
                        placeholder="Add a comment..."
                    />
                </div>
            </div>
        </div>
    );
};



export default PostContainer;