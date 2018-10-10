import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentIcon from '../Icons/CommentIcon'
import HeartIcon from '../Icons/HeartIcon'
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.data.likes,
    }
}

handleLikes = (event, index) => {
  this.setState(prevState => {
    return {likes: prevState.likes + 1}
  })
}
render() {
    return (
      <div className='post'>
        <div className='post-header'>
          <img src={this.props.data.thumbnailUrl} alt='thumbnail'/>
          <p><strong>{this.props.data.username}</strong></p>
        </div>
        <div className='post-content'>
          <img className='post-image' src={this.props.data.imageUrl} alt=''/>
        </div>

        <div className='post-icons'>
          <HeartIcon onClick={this.handleLikes} />
          <CommentIcon />

        </div>
        <p className='likes'><strong>{this.state.likes} likes</strong></p>
        <CommentSection comments={this.props.data.comments} comment={this.props.comment} />
      </div>
    )
}
}

// const PostContainer = props => {
//   return (
//     <div className='post'>
//       <div className='post-header'>
//         <img src={props.data.thumbnailUrl} alt='thumbnail'/>
//         <p><strong>{props.data.username}</strong></p>
//       </div>
//       <div className='post-content'>
//         <img className='post-image' src={props.data.imageUrl} alt=''/>
//       </div>
//
//       <div className='post-icons'>
//         <p>heart</p>
//         <p>comment</p>
//       </div>
//       <p className='likes'><strong>{props.data.likes} likes</strong></p>
//       <CommentSection comments={props.data.comments} comment={props.comment} />
//     </div>
//   )
// }

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
