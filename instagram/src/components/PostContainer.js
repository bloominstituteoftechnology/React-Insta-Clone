import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div>
            {props.instaData.map(user => {
                return (
                    <div className= "postcontainer-wrapper">
                        <div className= "postContainer-header" key= {user.username}>
                            <img className= "postContainer-header-img" src={user.thumbnailUrl} alt= "userProfileImg"></img>
                            <h4 className="postContainer-header-user">{user.username}</h4>
                        </div>
                     </div>
                )
            })}
        </div>
    )
}

export default PostContainer;