// Post container
// should render two image tags
import React, { Component } from 'react';
import CommentSection from './CommentSection';
// import './PostContainer.scss';

class PostContainer extends Component {
  render() {
    return (
      <div>
      	<div>
        	 <img className="thumbnail" src={this.props.thumbnail} alt='Thumbnail'/>
        	 <h4> {this.props.username}</h4>
      	</div>
      	<img className="Post" src={this.props.img} alt='PostedPicture'/>
      	<CommentSection comments={this.props.comments}/>
      </div>
    );
  }
}

export default PostContainer;
