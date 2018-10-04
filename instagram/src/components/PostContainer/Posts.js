import React from 'react'
import PostList from './PostList'
import './Post.css'

export default (props) => {
  return (
    <div>
      <PostList data ={props.data}/>
    </div>
  )
}


