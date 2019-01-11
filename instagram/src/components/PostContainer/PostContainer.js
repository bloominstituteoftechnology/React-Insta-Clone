import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Username from '../../styled-components/Username';
import styled from 'styled-components';

import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.user,
      thumbnail: props.thumbnail,
      image: props.image,
      time: props.time,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {

      const Post = styled.div`
        width: 100%;
        max-width: 640px;
        margin: 40px auto;
        border: 1px solid rgba(0, 0, 0, 0.2);
      `;

      const User = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 200px;

        padding: 10px 0;

        font-weight: bold;
        font-size: 1.6rem;
      `;

      const UserImg = styled.img`
        border-radius: 50%;
        height: 35px;
        width: 35px;
        margin:  0 6% 0 8%;
     `;

    return(
      <Post>
        <User>
          <UserImg src={this.state.thumbnail} alt="thumbnail"/>
          <Username>{this.state.username}</Username>
        </User>

        <img className="post__thumbnail"src={this.state.image} alt="thumbnail"/>

        <CommentSection time={this.state.time}
                        likes={this.state.likes}
                        comments={this.state.comments}
                        id={this.state.likes}
                        />
      </Post>
    );
  }
}

PostContainer.propTypes = {
  user: PropTypes.string,
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default PostContainer;
