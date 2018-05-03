import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("this.props.update: ", this.props.update);
  // }
  render() {
    return (
    <div className="container PostContainer">
      <PostHeader clDiv={`d-flex align-items-center my-3 post-header`} 
        clImg={`rounded-circle mx-2 logo-img `}  
        data={this.props.data} 
      />
      <PostContent clImg={`img-fluid mb-2`} 
        data={this.props.data} 
        state={this.props.state}
        addCom={this.props.addCom}
        update={this.props.update}
      />
    </div>
    );
  }
}

const PostHeader = props => {
  return (
    <div className={props.clDiv}>
      <img className={props.clImg} src={props.data.thumbnailUrl} alt="Logo" />
      <h4>{props.data.username}</h4>
    </div>
  );
};

const PostContent = props => {
  return (
    <div>
      <img className={props.clImg} src={props.data.imageUrl} alt="Content" />
      <CommentSection 
        data={props.data} 
        state={props.state}
        addCom={props.addCom}
        update={props.update} 
      />
    </div>
  );
}

export default PostContainer;