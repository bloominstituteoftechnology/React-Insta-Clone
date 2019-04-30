import React from 'react';
import User from '../User/User';
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../Likes/Likes';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      username: props.post.username,
      thumbnailUrl: props.post.thumbnailUrl,
      comments: props.post.comments,
      imageUrl: props.post.imageUrl
    };
  }

  increaseLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div style={border} className="border">
        <User
          username={this.state.username}
          thumbnaiilUrl={this.state.thumbnailUrl}
        />
        <div>
          <img style={picPost} src={this.state.imageUrl} alt="" />
        </div>
        <Likes
          id={this.state.imageUrl}
          increaseLike={this.increaseLike}
          likes={this.state.likes}
        />
        <div>
          <CommentSection comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

const picPost = {
  width: '100%'
};

const border = {
  border: 'solid 2px lightGray',
  margin: '20px'
};

export default Post;
