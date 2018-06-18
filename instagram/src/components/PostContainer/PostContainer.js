import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
  return (
    <div className='Post-Container'>
      {props.post.map((post, index) => (
        <Card key={`${post.username}.${index}`}>
          <CardBody>
            <img src={post.thumbnailUrl} alt='profile-pic' />
          </CardBody>
          <img width='60%' src={post.imageUrl} alt='Card cap' />
          <h6>{post.likes} likes</h6>
          <CardBody>
            <CommentSection comments={post.comments} />
          </CardBody>
          <h6>{post.timestamp}</h6>
          <input placeholder='Add Comment' type='text' />
        </Card>
      ))}
    </div>
  )
}
PostContainer.propTypes = {
  post: PropTypes.array,
  likes: PropTypes.string
}
export default PostContainer
