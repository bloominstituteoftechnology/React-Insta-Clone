import React from 'react';

const PostContainer = (props) =>{
    return(
        <div>
            {props.post.username}
            <img src={props.post.imageUrl}/>
        </div>
    )
}

export default PostContainer