import React from 'react';

const Post = props => {
    return (
    <div>
        <div className="insta-top">
            <img src={props.post.thumbnailUrl} alt={props.post.username} />
            <h1>{props.post.username}</h1>  
        </div>
        <img className="insta-pic" src={props.post.imageUrl} alt={props.post.username} />
        <div className="below-insta-pic">
            <i class="far fa-heart" style={{ fontSize: '25px' }}></i>
            <i class="far fa-comment" style={{ fontSize: '25px' }}></i>
        </div>
        <p className="likes"><strong>{props.post.likes}</strong> likes</p>
    </div>

    )

}

export default Post;



