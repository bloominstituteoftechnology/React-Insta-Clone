import React from 'react';

const Post = props => {
    return (
        <>
            <div>
                <img src={props.post.thumbnailUrl} alt={'user'}></img>
                <h2>{props.post.username}</h2>
            </div>
            <div>
                <img src={props.post.imageUrl} alt={'post-img'}></img>
            </div>
        </>
    );
};

export default Post;