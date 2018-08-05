import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHeader = styled.p `
  display: flex;
  text-align: left;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

const ProfPic = styled.img `
  width: 50px;
  border-radius: 25px;
  margin: 10px;
`;

const PostIcon = styled.img `
  height: 30px;
  margin: 5px 0;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: props.post.thumbnailUrl,
      username: props.post.username,
      postImg: props.post.imageUrl,
      likes: props.post.likes,
      timestamp: props.post.timestamp
    }
  }

  likeHandler=(event)=> {
    this.setState(prevState => ({likes: prevState.likes+1}))
  }

  render() {
    return (
        <div>
          <PostHeader> <ProfPic src={this.state.profilePic} alt='Profile' /> {this.state.username}</PostHeader>
          <img src={this.state.postImg} alt='Posted' />
          <div><PostIcon onClick={this.likeHandler} src="https://d30y9cdsu7xlg0.cloudfront.net/png/682470-200.png"/> <PostIcon src="https://image.freepik.com/free-icon/chat-bubble-ios-7-interface-symbol_318-38832.jpg" /> </div>
          <p>{this.state.likes} likes</p>
          <p>Posted {this.state.timestamp}</p>
        </div>
      );}
}

Post.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
export default Post;
