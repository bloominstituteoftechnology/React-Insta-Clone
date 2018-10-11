import React from 'react'
import Post from './Post'
import '../PostContainer/PostContainer.css'

const PostContainer = props => {
    console.log("post container props", props)
    return (
        <div className="post-container">
            {props.dummyData.map(item => {
                return (
                    <Post 
                        key={item.imageUrl}
                        post={item}
                    />
                )
            })}
        </div>
    )
}

export default PostContainer