import React from 'react';

const Likes = props => {
    return(
        <div className="likes"
        onClick={props.iLikeIt}>
    <div className="post-icons">
<i className="far fa-heart" />
<i className="far fa-comment" />
</div>
<p className="post-likes">{props.likes} likes</p>
</div>
    );
}


export default Likes;