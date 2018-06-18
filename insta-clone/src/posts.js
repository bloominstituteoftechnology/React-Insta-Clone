import React from 'react'
import Post from './post.js'

class Posts extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      {this.props.data.map(post => (
        <Post key={Math.random()} data={post} />
      ))}
      </div>
    )
  }
}

export default Posts
