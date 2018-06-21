import React from 'react'
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: props.comments,
        comment: "",
    };
  }

  addComment = event => {
    this.setState({ comment: event.target.value})
    console.log(this.state.comment)
  }

  addNewComment = event => {
    event.preventDefault();
    let newComment = {username: localStorage.getItem('username'), text: this.state.comment}
    let addedComments = this.state.comments.slice();
    addedComments.push(newComment);
    this.setState({ comments: addedComments, comment: ""})
  }




  render() {
    return (
    <div>{this.state.comments.map(comment => 
          <Comment 
            c={comment} 
          />)}  
          <form       
            onSubmit={this.addNewComment}            
          >
            <input className="commentInput" 
              placeholder="Add a comment"
              onChange= {this.addComment}
              value={this.state.comment}  
              type="text" 
              />
              
          </form>
    </div>
      )

}
}

export default CommentSection;