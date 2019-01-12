import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import heart from './img/icons8-heart-50.png';
import bubble from './img/icons8-speech-bubble-50.png';
import styled from 'styled-components';

const UserThumbnail = styled.img`
  border: none;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  margin: 15px;
`
const UserName = styled.div`
  font-weight: bold;
`
const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const PostCard = styled.div`
  max-width: 642px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin-bottom: 40px;
`
const PostImg = styled.img`
  max-width: 640px;
  width: 100%;
`
const LikeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0 15px 20px;
`

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <PostCard>
        <User>
          <UserThumbnail src={this.props.post.thumbnailUrl}/>
          <UserName>{this.props.post.username}</UserName>
        </User>
        <PostImg src={this.props.post.imageUrl} />
        <LikeSection>
          <div>
            <img src={heart} height='32px' width='32px' onClick={this.incrementLike}/>
            <img src={bubble} height='32px' width='32px'/>
          </div>
          <div>{this.state.likes} likes</div>
        </LikeSection>
        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp}/>
      </PostCard>
    );
  }
};

export default Post;
