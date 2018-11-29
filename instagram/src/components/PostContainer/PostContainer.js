import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeartImg from '../Imgs/HeartImg'
import CommentSection from '../CommentSection/CommentSection';
import { WrapperDiv, ImageStyles, ParagraphStyles, ContainerDiv } from '../Styles'



class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: this.props.someData.likes,
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
          <ImageStyles postuser src={this.props.someData.thumbnailUrl} alt='thumbnail'/>
          <ParagraphStyles postHeader><strong>{this.props.someData.username}</strong></ParagraphStyles>
        </ContainerDiv>
          <ImageStyles post src={this.props.someData.imageUrl} alt=''/>

        <ContainerDiv postImgs>
          <HeartImg post
            isLiked={this.state.liked} onClick={this.handleLikes} />
          
        </ContainerDiv>
        <ParagraphStyles likes><strong>{this.state.likes} likes</strong></ParagraphStyles>
        <CommentSection comments={this.props.someData.comments} comment={this.props.comment}
       timestamp={this.props.someData.timestamp}
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
