import React from 'react';

const PostContainer = (props) => {
    return (
        <div>
            {
                props.instaFeed.map((post, index)=> {
                    return (
                        <div key={index}>{post.username}</div>
                    )
                })
            }
        </div>
    )
}

export default PostContainer;