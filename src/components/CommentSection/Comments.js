import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Comments.css'
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments
    }
  }

  render() {
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
  
        <div className="commentSection">
          <input className="commentBox bold" placeholder="Add a comment..." />
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default Comments
