//CommentSection
import React from 'react';
import PostInput from './PostInput';
import Comment from './SingleComment.js';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      msg: '',
      comment: ''
    }
  }

changeHandler = e => {
  this.setState({msg: e.target.value});
}

post = () => {
  this.setState({comment: `${this.state.msg}`})
}

// type="text" value={props.comment} change={props.changeHandler} placeholder="Add comment"

  render(){
  return (
    <div>
      {this.state.comments.map((c, i) => <Comment key={i} comment={c}/>)}
      <p>{this.state.comment}</p>
      <PostInput
      comment={this.state.msg}
      changeHandler={this.changeHandler}
      change={this.post}
      />
    </div>
  );
}
}

export default CommentSection;
