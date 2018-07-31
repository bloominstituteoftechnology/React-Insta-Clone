import React from 'react';
import './CommentsSection.css';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data
    }
  }

  render() {
    console.log(this.state.comments);
    return(
      <div className='comment-container'>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className='comment'>
              <h1 className='username'>{comment.username}</h1>
              <p className='text'>{comment.text}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CommentsSection;
