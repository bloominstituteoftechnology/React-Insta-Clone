import React from 'react'
import Post from './Post'

const PostsContainer = props => {
  return (
    <div>
      {props.posts.map( post => {
        return (
          <Post 
            thumbnailUrl = {post.thumbnailUrl}
            username = {post.username}
            imageUrl = {post.imageUrl}
            likes = {post.likes}
            timestamp = {post.timestamp}
          />
        )
      })}
    </div>
  )
}

export default PostsContainer
