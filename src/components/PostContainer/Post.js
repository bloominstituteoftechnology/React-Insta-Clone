import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import Comments from '../CommentSection/Comments'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: props.post.likes
    }
  }

  increaseLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div className="postUser">
          <img className="postUserIcon" src={this.props.post.thumbnailUrl} alt="User Thumbnail" />
          <span className="bold">{this.props.post.username}</span>
        </div>
  
        <div className="postPicture">
          <img src={this.props.post.imageUrl} alt="User Thumbnail" />
        </div>
  
        <div className="postIcons"> 
          <span className="heartIcon" onClick={this.increaseLike}>
            <i className="far fa-heart"></i>
          </span>
          <span>
            <i className="far fa-comment"></i>
          </span>
        </div>
  
        <div className="postLikes">
          <p className="bold">{this.state.likes} likes</p>
        </div>
  
        <Comments className="Comments" comments={this.props.post.comments} />
      </React.Fragment>
    )
  }
}

Post.propTypes = {
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
}

export default Post
