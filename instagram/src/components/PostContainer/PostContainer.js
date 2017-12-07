import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: props.postData
    };
  }

  componentDidMount() {
    this.setState({
      postData: this.props.postData
    })
  }

  render() {
    return (
      <div className="PostContainer">
      {
        Array.from(this.state.postData).map((post, index) => (

          <div className="Post__item" key={index + ""}>

            <div className="Post__header">
              <img src={post.thumbnailUrl} className="Post__user-thumb" alt="User Thumb" draggable="false" />
              <div className="Post__user-name">philzcoffee</div>
            </div>

            <img src={post.imageUrl} className="Post__image" alt="Posted by User" draggable="false" />
                  
            <div className="Post__reactions">
              <div className="Post__reaction-icon Post__like-icon"></div>
              <div className="Post__reaction-icon Post__comment-icon"></div>
              <div className="Post__likes">{post.likes} likes</div>
            </div>

            <CommentSection key="1" comments={post.comments} />

          </div>
        
        ))

      }
      </div>
    );
  }
  
}

export default PostContainer;