import React from "react";
import Comments from '../CommentSection/comments';
import PostLikes from '../PostContainer/post-likes';
import PostHeader from '../PostContainer/post-header';
import './post-container.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div>
        <PostHeader 
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
        <img 
        alt="post thumbnail"
        className="post-image"
        src={this.props.post.imageUrl}
        />
        </div>
        <PostLikes 
        incrementLike={this.incrementLike}
        likes={this.state.likes}
        />
        <Comments 
        postId={this.props.post.imageUrl}
        comments={this.props.post.comments}
        />
      </div>
    );
  }
}

export default Post;
