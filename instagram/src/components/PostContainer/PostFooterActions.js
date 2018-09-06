import React, { Component } from 'react';
import './PostContainer.css'

// Handles the actions and likes for the Post.
class PostFooterActions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.likes
      };
    }

    // Updates the likes on the Post
    updateLikes = (event) => {
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }));
    };
  
    render() {
        return (
            <div className="post-footer-actions">
                <div className="post-actions-img">
                    <img src={require("./img/heart-icon.png")} alt="like" onClick={this.updateLikes}/>
                    <img src={require("./img/comment-icon.png")} alt="comment" />
                </div>
                
                <p className="likes">{this.state.likes} likes</p>
            </div>
        );
    }
}

export default PostFooterActions;