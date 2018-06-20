import React, { Component } from 'react';
import Comment from '../CommentSection/Comment'
import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      comment :''
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.addNewComment(e,this.props.postIndex)
      this.setState({
        comment:''
      })
    }

  }

  onChange = (e) =>{
    this.setState({
      comment:e.target.value
    })
  }

  render() { 
    return (
      <div className="comments">
        {this.props.commentsArr.map( (comments,index) => <Comment key={index} comments={comments}/>)}
        <div className="timestamp">{this.props.postTimeStamp}</div>
        <div className="add-comment">
          <input type="text" placeholder="Add Comment as guest" onKeyUp={this.onKeyUp} value={this.state.comment} onChange={(e) => this.onChange(e)}/>
        </div>
      </div>
     )
  }
}

CommentSection.propTypes = {
  commentsArr:PropTypes.array
}
export default CommentSection