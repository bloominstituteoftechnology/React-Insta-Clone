import React from 'react';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostPostContainer = styled.div`
  max-width: 614px;
  width: 96%;
  margin-bottom: 50px;
`;

const PostTop = styled.div`
  display: flex;
  font-size: 1.7rem;
  font-weight: 600;
  align-items: center;
  font-family: 'Tinos', serif;
  height: 60px;
  padding-left: 1.3%;
  width: 100%;
  border: 1px solid gainsboro;
  background-color: white;
`;

const PostTopImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const TopUsername = styled.div`
  padding-left: 1.6%;
`;

const PostImg = styled.img`
  max-width: 614px;
  width: 100%;
`;

class Post extends React.Component {
  render() {
    return (
      <PostPostContainer>
        <PostTop>
          <PostTopImg src={this.props.post.thumbnailUrl} alt='user thumbnail' />
          <TopUsername>{this.props.post.username}</TopUsername>
        </PostTop>
        <PostImg src={this.props.post.imageUrl} alt='' />
        <CommentSection
          comments={this.props.post.comments}
          post={this.props.post}
          dummyData={this.props.dummyData}
          comment={this.props.comment}
          updateComments={this.props.updateComments}
          commentEntries={this.props.commentEntries}
          likes={this.props.likes}
          updateLikes={this.props.updateLikes}
        />
      </PostPostContainer>
    );
  }
}

Post.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default Post;
