import React from 'react';
import CommentSection from '.././CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import './Posts.css';
import InstaLikes from './InstaLikes'
import PropTypes from 'prop-types';

class Post extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      likes: props.post.likes
    };
  }
incrementLikes = () =>{
  let likes = this.state.likes +1;
  this.setState({ likes });
};
render() {
  return (
    <div className="post-border">
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
      <InstaLikes incrementLikes={this.incrementLikes}
        likes={this.state.likes} 
      />
      <CommentSection comments={this.props.post.comments} />
    </div>
  );
  }
}


export default Post;