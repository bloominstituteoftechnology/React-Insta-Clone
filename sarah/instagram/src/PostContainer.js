// Post container
// should render two image tags
import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  render() {
    return (
      <div>
	<div>
	 <img src={this.props.thumbnailUrl} alt='Thumbnail'/>
	    console.log(this.props.thumbnailUrl);
	 <h4>Username: {this.props.username}</h4>
	</div>
	<img src={this.props.data} alt='PostedPicture'/>
	<CommentSection comments={this.props.comments}/>
      </div>
    );
  }
}

export default PostContainer;
