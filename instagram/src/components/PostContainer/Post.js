import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import CommentSection from '../CommentSection/CommentSection';
import Comment from '../CommentSection/Comment';


const Post = props => {
    return (
        <div className="post">
            <div className="post-author">
                <img src={props.post.thumbnailUrl} alt="profile" className="profile-img"/>
                {props.post.username}
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="main-img" /> 
            </div>
            <div className="post-comments">
                {props.post.comments.map(
                    comment => (
                        <Comment 
                            key={comment.username}
                            comment={comment}
                        />
                    )
                )}
            </div>
        </div>
    )
}


export default Post;