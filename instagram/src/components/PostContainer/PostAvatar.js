import React from 'react';

function PostAvatar(props) {
    console.log(`hi this is PostAvatar `, props.post);
    return(
        <div>
            <h4>
                {props.posterName}
            </h4>

            <img 
                className="icon"
                src={props.posterAvatar}
                alt="OP's profile picture"
            />
        </div>
    )
}

export default PostAvatar;