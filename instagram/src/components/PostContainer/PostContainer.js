import React from 'react'
import PostHeader from './PostHeader'
import './PostContainer.css'

const PostContainer = ({data}) => (
    <div className="post-container">
        <PostHeader data={data} />
    </div>
)

export default PostContainer