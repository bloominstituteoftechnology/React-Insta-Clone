import React from 'react';
import CommentSection from './CommentSection';
import FontAwesome from 'react-fontawesome';
import './PostContainer.css';
import { Image } from 'react-bootstrap';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className='master'>
        <div className="thumbnail">
          <img src={ this.props.postData.thumbnailUrl } alt='user pic' />
          <h4>{ this.props.postData.username }</h4>
        </div>
          <Image className='postPic'src={ this.props.postData.imageUrl } alt='post pic' responsive/>
          <div>
          <FontAwesome className="heart" name="heart-o" size="2x" />
          <FontAwesome className="con" name="comment-o" size="2x" />
          </div>
          <h5><strong>{ this.props.postData.likes } likes</strong></h5>
        <CommentSection comments={ this.props.postData.comments } />
      </div>
    );
  }
}

export default PostContainer;