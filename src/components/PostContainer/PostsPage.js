import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import Post from './Post.js'

const PostsPage = (props) => {
  return (
    <div className="PostsPage" >
      {props.data.map( item => {
        return (
          <Post
          className="Post"
          key={item.timestamp}
          post={item}
          />
        )
      })}
    </div>
  )
}


PostsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ 
      post: PropTypes.object,
      imageUrl: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(
        PropTypes.shape(
          {
            text: PropTypes.string,
            username: PropTypes.string
          }
        )
      )
    })
  )
}

export default PostsPage