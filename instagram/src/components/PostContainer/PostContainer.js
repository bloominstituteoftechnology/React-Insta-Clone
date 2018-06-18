import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div >
            {props.usersArray.map(user => {
                return (
                    <div class='container'>
                        <div class='post-header'>
                            <img class='user-logo' src={user.thumbnailUrl}></img>
                            <p class='username'>{user.username}</p>
                        </div>
                        <img class='main-image' src={user.imageUrl}></img>
                        <div>
                            <CommentSection commentData = {user.comments} likesData= {user.likes}/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



export default PostContainer;