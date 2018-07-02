import React from 'react'
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const PostContainer = ({data}) => (
    <div className="post-container">
        <PostHeader data={data} />
        <img src={data.imageUrl} className="post-image" alt=""></img>
        <CommentSection data={data} />
    </div>
)

export default PostContainer