import React from 'react';
import './commentSection.css';

class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments: []
    };
  }
  componentDidMount() {
    this.setState({comments: this.props.comments});
  }
  submitComment = (e) => {
    const {comments} = this.state;
    if (e.key === 'Enter') {
      comments.push({username: 'Admin', text: e.target.value});
      this.setState(this.state.comments: comments)
      e.target.value = "";
    }
  }
  render(){
    return (
      <div className='commentContainer'>
      {this.props.comments.map((comment, i) => (
        <div key={comment+i} className='commentSection'>
          <p className='comment'><span className='commentHeader'>{comment.username}</span> {comment.text}</p>
        </div>
      ))}
        <input
          type="text"
          className='commentBar'
          placeholder='Add a comment...'
          onKeyPress={this.submitComment}
        />
      </div>
    );
  }
}

export default CommentSection;
