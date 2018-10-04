import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'
import './PostContainer.css'


const PostContainer = props =>{

    return (
        <div>
 {props.dummyData.map((data) =>
        <div className= "post-container" key={Math.random().toString() * 2}>
                    <PostHeader key={data.username} username={data.username} thumbnail={data.thumbnailUrl}  />
                    <CommentSection key={data.likes.toString()} user={data.username} comments={data.comments} likes={data.likes}
                    image={data.imageUrl} timestamp={data.timestamp} />
                </div>
        )}
        </div>

    )
}

export default PostContainer