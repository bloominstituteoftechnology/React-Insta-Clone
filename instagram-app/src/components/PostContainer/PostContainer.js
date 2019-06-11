import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
    return ( props.post.map( (myPost) => (
        <div key={myPost.id}>
          <img src={myPost.thumbnailUrl} alt='user' />
          <p>{myPost.username}</p>
          <img src={myPost.imageUrl} alt ='post' />
          <p>{myPost.likes} likes</p>
        <CommentSection comment={myPost.comments}/>
        <p>{myPost.timestamp}</p>
        <input type='text' name='comment' placeholder='Add Comment..'/>
        </div>
    ))

    )
        
}

export default PostContainer