import React from 'react';
import Comment from './Comment';
import CommentInputBox from './CommentInputBox';
import './comment.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
      console.log(this.state.comments);
    return (
      <div>
        {this.state.comments.map((comment, index) => (
        /*
        <div>
            <h3> {comment.username} </h3>
            <p>  {comment.text} </p>
        </div> )}*/

        <Comment 
           key  = {index} localComment = {comment}
        />
        ))} 

        <CommentInputBox />
      </div>
    );
  }
}

export default CommentSection;


//The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster 
//as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post.