import React from 'react';
import './CommentSection.css';
import Comment from '../Comment/Comment.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: null
    }
  }
  addLike = () => {
   const likes = this.state.likes + 1;
   this.setState({likes})
  }

  addNewComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    if (e.target.commentInput.value) {
      comments.push({text: e.target.commentInput.value});
      e.target.commentInput.value = '';
      this.setState({comments: comments})
    }
  }

  componentDidMount() {
    const comments = this.props.comments;
    const likes = this.props.likes;
    this.setState({comments: comments, likes: likes});
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addLike}>Like</button>
        <p>{this.state.likes}</p>
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