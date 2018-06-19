import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
  return (
    <div className='Post-Container'>
      <Card key={props.key}>
        <CardBody>
          <img
            src={props.post.thumbnailUrl}
            alt='profile-pic'
            className='img-fluid rounded-circle'
          />
          <span>{props.post.username}</span>
        </CardBody>
        <img width='60%' src={props.post.imageUrl} alt='Card cap' />
        <h6>{props.post.likes} likes</h6>
        <CardBody>
          <CommentSection comments={props.post.comments} />
        </CardBody>
        <h6>{props.post.timestamp}</h6>
        <input placeholder='Add Comment' type='text' />
      </Card>
    </div>
  )
}

PostContainer.propTypes = {
  post: PropTypes.array,
  likes: PropTypes.string
}
export default PostContainer
