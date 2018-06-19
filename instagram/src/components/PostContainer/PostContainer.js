import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const PostContainer = (props) => {
  var moment = require('moment')
  let date = props.post.timestamp
  let fortmatDate = moment(date, 'MMMM Do YYYY, h:mm:ss a')

  console.log(fortmatDate)
  return (
    <div className='Post-Container'>
      <Card key={props.post.username + props.index}>
        <div className='top-container'>
          <img
            src={props.post.thumbnailUrl}
            alt='profile-pic'
            className='rounded-circle'
            id='thumbnail'
          />
          <span className='username'>
            <strong>{props.post.username}</strong>
          </span>
        </div>
        <img
          width='100%'
          src={props.post.imageUrl}
          alt='Card cap'
          className='img-fluid'
        />
        <div className='post-cta'>
          <div className='icons'>
            <div className='heart-icon'>
              <i
                className='far fa-heart fa-lg'
                onClick={() => props.onClick(this.element)}
              />
            </div>
            <div className='comment-icon'>
              <i className='far fa-comment fa-lg' />
            </div>
          </div>

          <span>
            <strong>{props.post.likes} likes</strong>
          </span>
          <CommentSection comments={props.post.comments} />
          <div className='date-stamp'>
            {' '}
            <Moment fromNow>{fortmatDate}</Moment> (<small>{moment(fortmatDate).format('LL')}</small>)
          </div>
          <input
            placeholder='Add a comment...'
            type='text'
            className='comment-input'
          />
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
