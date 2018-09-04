import React from 'react';

function PostAvatar(props) {
    return(
        <div>
            <h4>
                {props.post.posterName}
            </h4>

            <img 
                className="icon"
                src={props.post.posterAvatar}
                alt="OP's profile picture"
            />
        </div>
    )
}

export default PostAvatar;