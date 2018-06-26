import React from 'react';
import './CommentSection.css';
import Comment from '../Comment/Comment.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    const comments = this.props.comments;
    this.setState({comments});
  }
  
  render() {
    return (
      <div>
        {
          this.state.comments.map(comment => {
            return (
              <Comment 
                key={comment.text}
                comment={comment.text}
                username={comment.username}
              />
            );
          })
        }       
        <input type="text"/>
      </div>
    );
  }
}


export default CommentSection