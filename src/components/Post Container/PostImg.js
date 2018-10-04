import React from 'react';
import './postcontainer.css';

const PostImg = props => {
    return(
        <div>
            <img className={"postImg"}src={props.postimg.imageUrl} alt="Post Content"></img>
        </div>
    )
}

export default PostImg