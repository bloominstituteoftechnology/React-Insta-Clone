import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      likes: 0,
      likeStatus: false,
    }
  }

  toggleLike = (e) => {
    e.preventDefault();
    let newLikes = this.state.likes;
    if (this.state.likeStatus === false) {
      newLikes += 1;
      this.setState({
        likes: newLikes,
        likeStatus: true,
      })
    } else {
      newLikes -= 1;
      this.setState({
        likes: newLikes,
        likeStatus: false,
      })
    }
  }

  componentDidMount(){
    this.setState({
      likes: this.state.data.likes
    })
  }

  render() {

    const MainPostContainer = styled.div`
      border: 1px solid lightgray;
      background-color: white;
      width: 400px;
      margin: 15px;
      display: flex;
      flex-direction: column;
      filter: drop-shadow(4px 4px 10px gray);
    `;

    const Row = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 5px;
    `;

    const PostIcon = styled.img`
        width: 25px;
        height: 25px;
        margin: 5px;
    `;

    const UserIcon = styled.img`
        width: 25px;
        height: 25px;
        margin: 5px;
        border-radius: 50px;
    `;

    const DarkHeart = styled.img`
      width: 25px;
      height: 25px;
      margin: 5px;
      display: ${(this.state.likeStatus) ? "flex" : "none"};
      &:hover{
        cursor: pointer;
      }
    `;

    const Heart = styled.img`
      width: 25px;
      height: 25px;
      margin: 5px;
      display: ${(this.state.likeStatus) ? "none" : "flex"};
      &:hover{
        cursor: pointer;
      }
    `;

    const MainPhoto = styled.img`
      width: 100%;
      height: auto;
    `;

    const Username = styled.p`
      font-weight: bold;
      margin: 10px;
    `;

    return (
      <MainPostContainer data={this.state.data}>
        <Row>
          <UserIcon
            src={this.state.data.thumbnailUrl} alt="thumbnail"></UserIcon>
          <Username>{this.state.data.username}</Username>
        </Row>
        <MainPhoto
          src={this.state.data.imageUrl} alt="main"></MainPhoto>
        <Row>
          <Heart
            src="https://www.freepngimg.com/download/instagram/1-2-instagram-heart-transparent.png" alt="heart"  onClick={this.toggleLike}></Heart>
          <DarkHeart
            onClick={this.toggleLike}  src={require("./heart.svg")} alt="dark-heart"></DarkHeart>
          <PostIcon
            src="https://image.flaticon.com/icons/png/512/22/22302.png"
            alt="bubble"></PostIcon>
        </Row>
        <Username>
          <strong>{this.state.likes} likes</strong></Username>
        <CommentSection
          comments={this.state.data.comments}
          time={this.state.data.timestamp}></CommentSection>
      </MainPostContainer>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.shape ({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.image,
    imgUrl: PropTypes.image,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer;
