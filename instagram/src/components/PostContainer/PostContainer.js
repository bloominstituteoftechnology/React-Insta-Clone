import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
  return (
    <div className='Post-Container'>
      <Card key={props.post.username + props.index}>
        <CardBody>
          <img
            src={props.post.thumbnailUrl}
            alt='profile-pic'
            className='rounded-circle'
            id='thumbnail'
          />
          <span className='username'>
            <strong>{props.post.username}</strong>
          </span>
        </CardBody>
        <img
          width='100%'
          src={props.post.imageUrl}
          alt='Card cap'
          className='img-fluid'
        />
        <div className='post-cta'>
          <span>
            <strong>{props.post.likes} likes</strong>
          </span>
          <CommentSection comments={props.post.comments} />
          <h6>{props.post.timestamp}</h6>
          <input placeholder='Add a comment...' type='text' />
        </div>
      </Card>
    </div>
  )
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}
export default PostContainer
