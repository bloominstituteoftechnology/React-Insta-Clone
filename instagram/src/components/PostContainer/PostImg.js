import React from 'react';

function PostImg(props) {
    return(
        <div>
            <img 
                className="postImg"
                src={props.post.postImg}
                alt="image content"
            />
        </div>
    )
}

export default PostImg;