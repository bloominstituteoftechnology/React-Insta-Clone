import React from 'react';
import './Comments.css';
import CommentInput from './CommentInput';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }


  handleComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = (event) => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: window.localStorage.getItem('username') };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }

  render() {
    return (
        <div>
            <div className='comments'>
           {this.state.comments.map(item => {
              return (<p className='comment'><span className='user-comment' key={Math.random()}>{item.username} </span> 
              <span className='text-comment' key={Math.random()}>{item.text}</span></p>)
          })}
          <CommentInput  handleComment={this.handleComment} addComment={this.addComment} comment={this.state.comment} />
          </div>
         
          
          </div>

    );
};
}

export default Comments;

