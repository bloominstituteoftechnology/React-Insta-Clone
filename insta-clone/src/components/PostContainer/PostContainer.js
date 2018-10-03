import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'

const PostContainer = props =>{

    return (
        <div>
 {props.dummyData.map((data) =>
        <div className= "layout" key={Math.random().toString() * 2}>
           <PostHeader key={data.username} username={data.username} thumbnail={data.thumbnailUrl}  />
        <CommentSection key={data.likes.toString()}  user= {data.username} comments={data.comments} likes={data.likes} timestamp={data.timestamp} />
                </div>
        )}
        </div>

    )
}

export default PostContainer