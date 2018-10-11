import React from 'react';
import Comment from './Comment';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      username: 'Bummings'
    }
  }

  render() {
    return (
      <div>
      <h1>{this.state.comments}</h1>
        <form action="">
          <input className='post__input--input' type="text" placeholder='Add a comment...' />
        </form> 
      </div>
    );
  }
}


export default CommentInput;