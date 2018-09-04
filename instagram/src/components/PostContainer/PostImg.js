import React from 'react';

function PostImg(props) {
    return(
        <div>
            <img 
                className="postImg"
                src={props.postImg}
                alt="image content"
            />
        </div>
    )
}

export default PostImg;