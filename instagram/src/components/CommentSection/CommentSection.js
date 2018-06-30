import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      timestamp: props.timestamp
    }
  }
  componentDidMount(){
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({comments: JSON.parse(localStorage.getItem(this.props.postId))});
    } else {
      this.setComments();
    }
  }
  componentWillUnmount() {
    this.setComments();
  }
  setComments = () => {
    localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
  }

  addNewComment = (e) => {
    e.preventDefault();
    if (this.state.comment === "") {
      alert("You must provide a comment");
      return;
    }
    const newComment = {text: this.state.comment, username: 'User 2'};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({comments, comment: ""});
    setTimeout(() => {
      this.setComments();
    }, 500);

  }

  commentWatcher = e => {
    this.setState({comment: e.target.value})
  }
  render(){
    return (
      <div className="comment-section">
         {this.state.comments.map((c, i)=> <Comment key={i} obj={c} />)}
         <p>{this.state.timestamp}</p>
         <CommentInput val={this.state.comment} submitHandler={this.addNewComment} watchInput={this.commentWatcher}/>
      </div>
    )
  }
}

export default CommentSection;
