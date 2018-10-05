import React from 'react';
import '../post.css';

const PostLikes = props => {
    return(
        <div>
        <div className={"postLikes"}>{props.postlikes.likes} likes</div>
        </div>
    )
}

export default PostLikes