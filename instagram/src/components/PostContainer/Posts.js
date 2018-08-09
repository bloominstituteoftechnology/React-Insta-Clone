import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import PostHeader from "./PostHeader";
import Likes from "./Likes"
import styled from 'styled-components';

const PostImg = styled.img`
  max-width: 100%;
`

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.posts.likes
    };
  }
  incrementCount = () => {
        let likes = this.state.likes +1;
        this.setState({likes})
  };
  render() {
    return (
      <div>
        {console.log(this.props)}
        <PostHeader
          username={this.props.posts.username}
          thumbnailUrl={this.props.posts.thumbnailUrl}
        />
        <div>
          <PostImg
            src={this.props.posts.imageUrl}
            className="post-image"
            alt="attachment"
          />
        </div>
        <Likes 
        likes={this.state.likes}
        incrementCount={this.incrementCount}/>
        <CommentSection comments={this.props.posts.comments} />
        <div>{this.props.posts.timestamp}</div>
      </div>
    );
  } 
  
}
/* const Posts = props => {
  console.log(props.posts);
  return (
    <div>
      <PostHeader
        username={props.posts.username}
        thumbnailUrl={props.posts.thumbnailUrl}
      />
      <div>
        <img
          src={props.posts.imageUrl}
          className="post-image"
          alt="attachment"
        />
      </div>
      <div>icons</div>
      <div>{props.posts.likes} likes</div>
      <CommentSection comments={props.posts.comments} />
      <div>{props.posts.timestamp}</div>
    </div>
  );
}; */

export default Posts;
