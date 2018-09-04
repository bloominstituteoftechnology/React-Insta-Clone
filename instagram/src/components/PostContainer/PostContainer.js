import React from 'react';
import PostAvatar from './PostAvatar';
import PostImg from './PostImg';

function PostContainer(props) {
    return(
        <div>
            {props.posts.map(post => {
                console.log(post);
                return(
                    <div>
                        <PostAvatar
                            posterName = {post.username}
                            posterAvatar = {post.thumbnailUrl}
                        />

                        <PostImg
                            postImg = {post.imageUrl}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;