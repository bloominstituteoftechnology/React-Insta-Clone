import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: this.props.comment
    }
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({ 
        comments: [...this.state.comments, {username: 'dummy', text: this.props.comment}],
        comment: ''
       })
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.props.comments.map((comment,i) => <Comment comment={comment} key={i} />)}
        <input type="text" name="comment" placeholder="Add a comment" onChange={this.props.onInputChange} value={this.props.comment} onKeyPress={this.handleKeyPress}/>
      </React.Fragment>
    )
  }
}  

export default CommentSection;