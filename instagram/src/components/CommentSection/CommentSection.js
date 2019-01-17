import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      currentComment: '',
      commentNumber: 0,
      likes: 0,
      notLiked: false,
      userProfile: props.userProfile
    }
  }
  componentDidMount = () => {
    this.setState({
      comments: this.props.comments,
      currentComment: '',
      commentNumber: this.props.comments.length,
      likes: this.props.likes,
      notLiked: true
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  toggleLike = () => {
    this.setState(previousState => { 
      return {
        notLiked: !previousState.notLiked,
      }
    })
    {this.state.notLiked ? 
    this.setState(previousState => {
      return {
        likes: previousState.likes +=1,
      }
    })
    :
    this.setState(previousState => {
      return {
        likes: previousState.likes -=1,
      }
    })
    }
  }
  addComment = (event) => {
    event.preventDefault()
    const newCommentList = [...this.state.comments, {username: this.state.userProfile, text: this.state.currentComment}]
    this.setState({
      comments: newCommentList,
      currentComment: '',
      commentNumber: newCommentList.length
    })
  }

  render(props) {
    return (
      <div className="comment-section">
        <div className="likes-comments">
          <div className="likes-comments-icons">
            <i className="far fa-heart fa-2x" onClick={this.toggleLike}></i>
            <i className="far fa-comment fa-2x"></i>
          </div>
          <div className="likes-comments-stats">
            <p>{this.state.likes} likes</p>
            <p>{this.state.commentNumber} comments</p>
          </div>
        
        </div>
        {this.state.comments.map(comment => {
          return <Comment username={comment.username} text={comment.text}/>
        })}
        <form>
          <input 
          type="text"
          name="currentComment"
          value={this.state.currentComment}
          onChange={this.handleChange}
          onSubmit={this.addComment}
          />
          <button onClick={this.addComment} disabled={this.state.currentComment === '' ? true : false}>Submit</button>
        </form>

      </div>
      
    )
  }

}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default CommentSection
