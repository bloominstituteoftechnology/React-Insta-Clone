import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Comments.css'
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments,
      newComment: ""
    }
  }
  
  addNewComment = (e, i) => {
    e.preventDefault()
    let comments = [...this.state.comments]
    const commentObject = {
      text: this.state.newComment,
      key: i,
      username: "tim"
    }
    comments.push(commentObject)
    
    this.setState({ comments, newComment: "" })
  }

  handleChange = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  render() {
    const nextIndex = this.state.comments.length +1

    return (
      <div className="Comments">
        {this.state.comments.map(comment => {
          return (
            <Comment 
              className="Comment"
              key={comment.text}
              comment={comment} 
            />
          )
        })}
  
        <p className="timeFromNow">{moment().startOf('hour').fromNow()}</p>
        
        <hr className="divider" />
  
        <form className="commentSection" onSubmit={e => this.addNewComment(e, nextIndex)}>
          <input
            type="text"
            className="commentBox bold"
            placeholder="Add a comment..."
            value={this.state.newComment}
            onChange={this.handleChange}
          />
          <button type="submit"><i className="fas fa-ellipsis-h"></i></button>
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default Comments
