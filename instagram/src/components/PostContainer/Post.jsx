import React from 'react';

class Post extends React.Component {
  state = {
    likes: this.props.post.likes
  }

  // TODO: some logic for adding likes
  like = () => {};

  render() { 
    return(
      <div>
        <h1>{this.props.post.username}'s Post has {this.state.likes} likes.</h1>
      </div>
    );
  }; // TODO: render sometiong
}

export default Post;