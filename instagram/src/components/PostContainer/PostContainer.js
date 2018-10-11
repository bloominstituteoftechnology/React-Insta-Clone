import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'
import {
  Container,
  Header,
  Thumbnail,
  Username,
  PostImage,
  LikesText,
  Timestamp
} from './PostContainerStyles'

class PostContainer extends Component {
  constructor({
    post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
  }) {
    super()
    this.state = {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments
    }
  }

  static getDerivedStateFromProps(
    {
      post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
    },
    prevState
  ) {
    if (username !== prevState.username) {
      return {
        username,
        thumbnailUrl,
        imageUrl,
        likes,
        timestamp,
        comments
      }
    }

    return null
  }

  addLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments
    } = this.state
    const { addLike } = this

    return (
      <Container>
        <Header>
          <Thumbnail src={thumbnailUrl} alt="user thumbnail" />
          <Username>{username}</Username>
        </Header>

        <PostImage src={imageUrl} alt="post" />
        <LikesText onClick={addLike}>{likes} likes</LikesText>
        <CommentSection comments={comments} />
        <Timestamp>{timestamp}</Timestamp>
      </Container>
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer
