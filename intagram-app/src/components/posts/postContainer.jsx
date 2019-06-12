import React from 'react'

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(post => (
                <Post post={post}/>
            ))}
        </div>
    )
}

export default PostContainer
