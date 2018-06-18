import React from 'react'
import './PostContainer.css'

const PostHeader = ({data}) => (
    <div className="post-header-container">
        <img className="post-header-thumbnail" src={data.thumbnailUrl} alt="" />
        <div className="post-header-username">{data.username}</div>
    </div>
)

export default PostHeader