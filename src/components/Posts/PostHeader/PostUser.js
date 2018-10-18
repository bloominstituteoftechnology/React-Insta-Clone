import React from 'react';
import '../post.css';

const PostUser = props => {
    return(
        <div className={"postUser"}>
        <img src={props.usericons.thumbnailUrl} alt="User icon"></img>
        <h2>{props.usernames.username}</h2>
        </div>
    )
}

export default PostUser