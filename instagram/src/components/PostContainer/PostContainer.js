import React, { Component } from 'react'
import { Card } from 'reactstrap'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
import PropTypes from 'prop-types'

class PostContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: props.post.likes
    }
    this.inputComment = React.createRef()
  }

  handleLikes = (e, index) => {
    let likes = this.state.likes
    let result = e.target.classList.contains('heart-red')
    if (result) {
      this.setState({
        likes: likes - 1
      })
    } else {
      this.setState({
        likes: likes + 1
      })
    }
  }
  focusInput = (ref) => {
    console.log(ref.current.focus())
    ref.current.focus()
  }

  handleFocus = (ref) => {
    this.focusInput(ref)
  }

  render () {
    const { post, index } = this.props
    return (
      <div className='Post-Container'>
        <Card key={post.username + index}>
          <div className='top-container'>
            <img
              src={post.thumbnailUrl}
              alt='profile-pic'
              className='rounded-circle'
              id='thumbnail'
            />
            <strong className='username'>{post.username}</strong>
          </div>
          <img
            width='100%'
            src={post.imageUrl}
            alt='Card cap'
            className='img-fluid'
          />
          <div className='post-cta'>
            <div className='icons'>
              <div className='heart-icon'>
                <i
                  className='far fa-heart fa-lg'
                  onClick={(e) => {
                    this.handleLikes(e, this.index)
                    e.target.classList.toggle('heart-red')
                  }}
                />
              </div>
              <div className='comment-icon'>
                <i
                  onClick={() => this.handleFocus(this.inputComment)}
                  className='far fa-comment fa-lg'
                />
              </div>
            </div>

            <span>
              <strong>{this.state.likes} likes</strong>
            </span>
            <CommentSection
              myRef={this.inputComment}
              comments={post.comments}
              keyId={post.imageUrl}
              timeStamp={post.timestamp}
              commentInput={this.props.commentInput}
              handleChange={this.props.handleChange}
            />
          </div>
        </Card>
      </div>
    )
  }
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
