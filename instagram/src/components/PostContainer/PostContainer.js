import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostHeader = (props) => {
  console.log("Card Logo Header", props);
  return (
    <div className={props.clDiv}>
      <img className={props.clImg} src={props.data.thumbnailUrl} alt="Logo" />
      <h4>{props.data.username}</h4>
    </div>
  );
};

const PostContent = (props) => {
  return (
    <div>
      <img className={props.clImg} src={props.data.imageUrl} alt="Well Image" />
      <CommentSection data={props.data} />
    </div>
  );
}

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="container PostContainer">
      <PostHeader clDiv={`d-flex align-items-center my-3 post-header`} 
        clImg={`rounded-circle mx-2 logo-img `}  
        data={this.props.data} 
      />
      <PostContent clImg={`img-fluid mb-2`} 
        data={this.props.data} 
      />
    </div>
    );
  }
}

export default PostContainer;