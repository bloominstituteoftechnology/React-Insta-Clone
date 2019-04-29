import React from 'react';
import './CommentSection.css';
import Comment from "../Comment/Comment";
import heart from "../../img/heart-2.svg"
import chat from "../../img/chat-46.svg"

class CommentSection extends React.Component {
    state = {
      comments: [],
      newCommentText: "",
      likes: 0
    };
  
    componentDidMount() {
      this.setState({ comments: this.props.comments, likes: this.props.likes });
    }
  
    onChange = e => {
      this.setState({ newCommentText: e.target.value });
    };
  
    addComment = (event) => {
      // console.log(event)
      const username = "CRJuelfs15";
      const text = this.state.newCommentText;
      this.setState({
        comments: [...this.state.comments, { username, text }],
        newCommentText: ""
      });
    };
    addCommentEnter = (event) => {
      // console.log(event)
      if (event.key === 'Enter'){
        const username = "CRJuelfs15";
        const text = this.state.newCommentText;
        this.setState({
          comments: [...this.state.comments, { username, text }],
          newCommentText: ""
        });
        // window.location.reload(false);
        event.preventDefault();
      }
    }
  
    likePost = () => {
      this.setState({ likes: this.state.likes + 1 });
    };
    render() {
      return (
        <div className="comments-section">
          <div className = 'post-icons'>
            <img src = {heart} alt = 'heart-icon' onClick = {this.likePost} />
            <img src = {chat} alt = 'chat-icon' onClick = {this.addComment} />
          </div>
          <strong>
            {this.state.likes} likes
          </strong>
          {this.state.comments.map(comment => {
            return (
              <>
                <Comment comment={comment} />
              </>
            );
          })}
          <div>
            <form onKeyDown = {this.addCommentEnter}>
              <input
                className = 'comment-input'
                placeholder="Add a comment..."
                value={this.state.newCommentText}
                onChange={this.onChange}
              />
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default CommentSection;
  