import React from 'react';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />
        })}
      </div>
    );
  }
}

const Comment = props => {
  console.log('props', props);
  return (
    <div className='comment'>
      <div>
        {props.comment.username}
      </div>
      <div>
        <p>{props.comment.text}</p>
      </div>
    </div>
  )
}

export default CommentSection;
