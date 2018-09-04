import React from 'react';
import PostAvatar from './PostAvatar';
import PostImg from './PostImg';

function PostContainer(props) {
    return(
        <div>
            {props.posts.map(post => (
                <PostAvatar
                    posterName = {post.username}
                    posterAvatar = {post.thumbnailUrl}
                />
            ))}

            {props.posts.map(post => (
                <PostImg
                    postImg = {post.imageUrl}
                />
            ))}
        </div>
    )
}

export default PostContainer;