import React from 'react';


const PostContainer = props => {
    return(
        <div className="post-container">
            <h1>{props.usrData.username}</h1>
        </div>
    );
}

export default PostContainer;