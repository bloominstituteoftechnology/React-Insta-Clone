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

  addNewComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    if (e.target.commentInput.value) {
      comments.push({text: e.target.commentInput.value});
      this.setState({comments: comments})
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
        <form onSubmit={this.addNewComment}>     
          <input type="text" placeholder="Add a comment..." name="commentInput"/>
        </form>
      </div>
    );
  }
}


export default CommentSection