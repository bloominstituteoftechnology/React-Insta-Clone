import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 600px;
  margin: 30px auto;
  border: 1px solid black;
`;

const PostWrapperImg = styled.img`
  height: auto;
  width: auto;
  max-width: 600px;
`;

const PostHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
`;

const PostHeaderWrapperImg = styled.img`
  height: auto;
  width: auto;
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
`;

const PostHeaderWrapperUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const PostIconAndCommentsWrapper = styled.div`
  padding: 10px 20px;
`;

const PostIconAndCommentsWrapperP = styled.p`
  margin: 5px 0 10px 0;
  font-weight: 700;
  font-size: 14px;
`;

const PostIconsWrapper = styled.div`
  font-size: 20px;
  display: flex;
`;

const PostIconsWrapperI = styled.i`
  margin-right: 14px;
  padding: 0;
`;

class Post extends React.Component {
  state = {
    likes: this.props.post.likes,
    liked: false
  };

  like = () => {
    let likes = this.state.likes;
    let liked = this.state.liked;

    if (liked) {
      likes--;
      liked = false;
    } else {
      likes++;
      liked = true;
    }

    this.setState({ liked, likes });
  };

  render() {
    return (
      <PostWrapper>
        <PostHeaderWrapper>
          <PostHeaderWrapperImg
            src={this.props.post.thumbnailUrl}
            alt={'Profile thumb.'}
          />
          <PostHeaderWrapperUsername>
            {this.props.post.username}
          </PostHeaderWrapperUsername>
        </PostHeaderWrapper>
        <PostWrapperImg src={this.props.post.imageUrl} alt={'post'} />
        <PostIconAndCommentsWrapper>
          <PostIconsWrapper>
            <PostIconsWrapperI
              className="far fa-heart"
              onClick={this.like}
              style={this.state.liked ? { color: 'red' } : null}
              className={
                'fa-heart likes-heart ' + (this.state.liked ? 'fas' : 'far')
              }
            />
            <PostIconsWrapperI className="far fa-comment" />
          </PostIconsWrapper>
          <PostIconAndCommentsWrapperP>
            {this.state.likes} likes
          </PostIconAndCommentsWrapperP>
          <CommentSection post={this.props.post} />
        </PostIconAndCommentsWrapper>
      </PostWrapper>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
