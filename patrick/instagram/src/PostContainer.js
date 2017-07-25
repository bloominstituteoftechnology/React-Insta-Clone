import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div>
           <img className="thumbnail"
                src={this.props.thumbnail}
                alt='Thumbnail'/>
           <h4> {this.props.username}</h4>
        </div>
        <img className="Post"
             src={this.props.img}
             alt='PostedPicture'/>
        {/* <CommentSection comments={this.props.postData.comments} /> */}
        {/* Text from the Post Container component...and: */}
        {/* <CommentSection /> */}
        <CommentSection comments={this.props.comments}/>
      </div>
    );
  }
}

export default PostContainer;
