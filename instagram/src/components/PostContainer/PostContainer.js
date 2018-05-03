import React from 'react';
import { CommentSection } from '.././CommentSection/CommentSection';
import "./PostContainerStyle.css";

export const PostContainer = (props) => {
    return (
        <div>
            {props.data.map(user => {
                return (
                    <div className='postContainer'>
                        <div className='user'>
                            <img className='thumbnail' key={user.username} src={user.thumbnailUrl} />
                            <p className='username'>{user.username}</p>
                        </div>
                        <img className='postImage' src={user.imageUrl} />
                        <p className='likes'><strong>{user.likes}</strong> likes</p>
                        <CommentSection comments={user.comments} />
                        <input className="addComment" placeholder='Add a comment...' />
                    </div>
                )
            })}
        </div>
    )
};