import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentIcon from '../Icons/CommentIcon'
import HeartIcon from '../Icons/HeartIcon'
import CommentSection from '../CommentSection/CommentSection';
import { WrapperDiv, StyledImage, StyledParagraph, ContainerDiv } from '../Styles'



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
        <ContainerDiv post>
          <StyledImage postuser src={this.props.data.thumbnailUrl} alt='thumbnail'/>
          <StyledParagraph postHeader><strong>{this.props.data.username}</strong></StyledParagraph>
        </ContainerDiv>
          <StyledImage post src={this.props.data.imageUrl} alt=''/>

        <ContainerDiv postIcons>
          <HeartIcon post
            isLiked={this.state.liked} onClick={this.handleLikes} />
          <CommentIcon />
        </ContainerDiv>
        <StyledParagraph likes><strong>{this.state.likes} likes</strong></StyledParagraph>
        <CommentSection comments={this.props.data.comments} comment={this.props.comment}
       timestamp={this.props.data.timestamp}
        username={this.props.username}/>
      </WrapperDiv>
    )
}
}


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
