//CommentSection
import React from 'react';
import PostInput from './PostInput';
import Comment from './SingleComment.js';
import './CommentSection.css';

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

//Here, the comments section of the array is mapped over, returning each item of the comment
//section. The comment section is combined with an input because the input needs to be
//rendered in and interact with the comment section.
  render(){
  return (
    <div>
      <div>
        {this.state.comments.map((item) => <Comment com={item} />)}
      </div>
        <div className="newComment">
          <p><strong>coolguy420</strong> {this.state.comment}</p>
        </div>
          <div className="input">
            <PostInput
            comment={this.state.msg}
            changeHandler={this.changeHandler}
            change={this.post}
            />
          </div>
    </div>
  );
}
}

export default CommentSection;
