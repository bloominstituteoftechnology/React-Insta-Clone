import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import PostContainer from '../PostContainer/PostContainer'
class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      currentComment: null,
      likes: 0,
      commentNumber: 0
    }
  }
  componentDidMount = () => {
    this.setState({
      comments: this.props.comments,
      currentComment: '',
      commentNumber: this.props.comments.length
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  addComment = (event) => {
    event.preventDefault()
    const newCommentList = [...this.state.comments, {username: 'DEFAULT', text: this.state.currentComment}]
    this.setState({
      comments: newCommentList,
      currentComment: '',
      commentNumber: newCommentList.length
    })
  }

  render(props) {
    return (
      <div>
        <div className="likes-comments">
          <div className="likes-comments-icons">
          
          
          </div>
          <div className="likes-comments-stats">
            <p>{this.state.commentNumber} comments</p>
            <p>{this.state.likes} likes</p>
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
          isRequired={true}/>
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
