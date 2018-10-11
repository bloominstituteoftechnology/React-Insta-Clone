import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentIcon from '../Icons/CommentIcon'
import HeartIcon from '../Icons/HeartIcon'
import CommentSection from '../CommentSection/CommentSection';
import { WrapperDiv, StyledImage, StyledParagraph } from '../Styles'
import './PostContainer.css';


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: this.props.data.likes,
    }
}


handleLikes = (event, index) => {
  let likes = this.state.likes;
  if (this.state.liked){
    this.setState({
      liked: false,
      likes: likes - 1,
    })
  } else {
      this.setState({
        liked: true,
        likes: likes + 1,
      })
  }

}
render() {
    return (
      <WrapperDiv post>
        <div className='post-header'>
          <StyledImage postuser src={this.props.data.thumbnailUrl} alt='thumbnail'/>
          <StyledParagraph postHeader><strong>{this.props.data.username}</strong></StyledParagraph>
        </div>
        <div className='post-content'>
          <StyledImage post src={this.props.data.imageUrl} alt=''/>
        </div>

        <div className='post-icons'>
          <HeartIcon post
            isLiked={this.state.liked} onClick={this.handleLikes} />
          <CommentIcon />

        </div>
        <p className='likes'><strong>{this.state.likes} likes</strong></p>
        <CommentSection comments={this.props.data.comments} comment={this.props.comment}
       timestamp={this.props.data.timestamp}
        username={this.props.username}/>
      </WrapperDiv>
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
