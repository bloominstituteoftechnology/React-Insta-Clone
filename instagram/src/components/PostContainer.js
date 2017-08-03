import React, { Component } from 'react';
import CommentSection from './CommentSection';
import '../css/PostContainer.css';

import Likes from './Likes'

class PostContainer extends Component {
      constructor(props) {
        super(props);
        this.state = {
          postData: []
        };
        
      }
      componentDidMount() {
        this.setState({postData: this.props.postData})
      }

      

      render() {
        return (
          <div className="postContainer">
          {this.state.postData.map((obj) => {
            return (
              <div className="post">
                <div>
                  <img src={obj.thumbnailUrl} className="thumbnail"/>
                  <p className="username">{obj.username}</p>
                </div>
                <img src={obj.imageUrl} className="postImage"/>
                
                <Likes likes={obj.likes} />
                <CommentSection comments={obj.comments} />
              </div>
              )
          })}
          </div>
        )
      }
}

export default PostContainer;
