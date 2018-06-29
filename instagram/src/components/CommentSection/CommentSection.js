import React from 'react';
import './CommentSection.css';
import Comment from '../Comment/Comment.js';
import styled from 'styled-components';

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
    const Icon = styled.i`
    padding: 20px 20px 20px 0;
    `;

    const Input = styled.input`
      height: 30px;
      width: 200px;
    `;

    return (
      <div>
        <Icon onClick={this.addLike} className="far fa-heart fa-3x"></Icon>
        <Icon className="far fa-comment fa-3x"></Icon>
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
          <Input type="text" placeholder="Add a comment..." name="commentInput"/>
        </form>
      </div>
    );
  }
}


export default CommentSection