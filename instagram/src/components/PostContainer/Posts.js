import React from 'react'
import PostList from './PostList'
import './Post.css'

export default (props) => {
  return (
    <div>
      {props.data.map( post => <PostList post={post} />)}
    </div>
  )
}


