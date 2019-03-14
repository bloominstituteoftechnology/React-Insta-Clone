import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div >
            {props.usersArray.map(user => {
                return (
                    <div className='container' key={user.username + (Math.random() * 1000 * (Math.random() * 100))} >
                        <div className='post-header'>
                            <img className='user-logo' src={user.thumbnailUrl}></img>
                            <p className='username'>{user.username}</p>
                        </div>
                        <img className='main-image' src={user.imageUrl}></img>
                        <div className="marginLeftRight">
                            <CommentSection commentData={user.comments} likesData={user.likes} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



export default PostContainer;