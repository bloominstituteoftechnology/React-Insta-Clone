import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import './Post.css';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const PostBorder = styled.div`
    border: 1px solid #d3d3d3;
    margin-top: 110px;
    margin-bottom: -75px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    `;

const PostImgWrapper = styled.div`
    height: 100%;
    width: 100%;
    `;

const PostImg = styled.img`
    width: 100%;
    margin-bottom: 20px;
    `;


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }

    render() {
        return (
        <PostBorder>
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
        />
      <PostImgWrapper>
        <PostImg
          alt="post thumbnail"
          src={this.props.post.imageUrl}
        />
      </PostImgWrapper>
        <LikeSection 
            incrementLike={this.incrementLike}
            likes={this.state.likes}
        />
        <CommentSectionContainer comments={this.props.post.comments} />
    </PostBorder>
    );
    }
    
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default Post;