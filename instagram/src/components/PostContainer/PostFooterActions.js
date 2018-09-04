import React, { Component } from 'react';
import './PostContainer.css'

class PostFooterActions extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.likes
      };
    }

    updateLikes = (event) => {
        console.log('updateLikes');
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }));
    };
  
    render() {
        return (
            <div className="post-footer-actions">
                <div className="post-actions-img">
                    <img src={require("./heart-icon.png")} alt="like" onClick={this.updateLikes}/>
                    <img src={require("./comment-icon.png")} alt="comment" />
                </div>
                
                <p className="likes">{this.state.likes} likes</p>
            </div>
        );
    }
}

export default PostFooterActions;