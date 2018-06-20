import React from 'react'
import Post from './post.js'

const Posts = props => {
    return (
      <div>
      {props.data.map(post => (
        <Post key={Math.random()} data={post} search={props.search}/>
      ))}
      </div>
    )
}

export default Posts
