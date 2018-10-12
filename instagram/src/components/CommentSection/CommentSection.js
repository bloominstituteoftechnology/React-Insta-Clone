import React from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import moment from 'moment';

const StyledCommentsContainer = styled.div`
  border: 1px solid gainsboro;
  background-color: white;
  font-family: 'Niramit', sans-serif;
  font-size: 1.5rem;
  margin-top: -2px;
  padding: 0 2.5%;
`;

const StyledButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCommentsButtonBox = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: 20%;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 30%;
  }
`;

const StyledButtonBarImg = styled.img`
  height: 28px;
  width: 28px;
  cursor: pointer;
`;

const StyledCommentBubbleImg = styled.img`
  height: 28px;
  width: 28px;
  cursor: pointer;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const StyledLikesCount = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledDateStamp = styled.div`
  color: gray;
  font-size: 1.3rem;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledMoreButton = styled.div`
  position: absolute;
  height: 56px;
  width: 45px;
  left: 56.4%;
  cursor: pointer;
`;

const StyledCommentForm = styled.form`
  height: 56px;
`;

const StyledCommentInput = styled.input`
  background-image: url(https://png.icons8.com/windows/48/000000/more.png);
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 98%;
  background-position-y: 50%;
  border: 0;
  border-top: 1px solid gainsboro;
  width: 100%;
  height: 56px;
  font-size: 1.6rem;
  font-family: 'Niramit', sans-serif;
`;

const StyledInvisibleButton = styled.img`
  background: transparent;
  border: none;
  font-size: 0;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem('username'),
      comment: '',
      likes: props.likes.filter((entry, i) => i + 1 === props.post.id),
      id: props.post.id,
      liked: false,
      comments: [
        ...props.comments,
        ...props.commentEntries.filter(entry => entry.id === props.post.id)
      ]
    };
  }

  addComment = event => {
    event.preventDefault();
    this.setState(
      {
        comments: [
          ...this.state.comments,
          {
            id: this.state.id,
            text: this.state.comment,
            username: this.state.username
          }
        ],
        comment: ''
      },
      () =>
        this.props.updateComments(
          this.state.comments[this.state.comments.length - 1]
        )
    );
  };

  commentInput = event => {
    this.setState({
      comment: event.target.value
    });
  };

  liker = () => {
    let likeCounter = this.state.likes;
    if (this.state.liked === false) {
      this.setState({
        likes: ++likeCounter,
        liked: true
      });
    } else {
      this.setState({
        likes: --likeCounter,
        liked: false
      });
    }
  };

  render() {
    let date = moment(
      this.props.post.timestamp,
      'MMMM Do YYYY, hh:mm:ss a'
    ).format('YYYY-MM-DD HH:mm:ss');
    return (
      <StyledCommentsContainer>
        <StyledButtonBar>
          <StyledCommentsButtonBox>
            <StyledButtonBarImg
              src='https://png.icons8.com/ios/48/000000/hearts.png'
              alt=''
              onClick={this.liker}
            />
            <StyledCommentBubbleImg
              src='https://png.icons8.com/ios/48/000000/speech-bubble.png'
              className='commentBubble'
              alt=''
            />
            <StyledButtonBarImg
              src='https://png.icons8.com/ios/48/000000/upload.png'
              alt=''
            />
          </StyledCommentsButtonBox>
          <StyledButtonBarImg
            src='https://png.icons8.com/ios/48/000000/bookmark-ribbon.png'
            alt=''
          />
        </StyledButtonBar>
        <StyledLikesCount>{this.state.likes} likes</StyledLikesCount>
        {this.state.comments.map(comment => {
          return (
            <Comment
              key={Math.random()}
              comment={comment}
              dummyData={this.props.dummyData}
            />
          );
        })}
        <StyledDateStamp>{moment(date).fromNow()}</StyledDateStamp>
        <StyledCommentForm>
          <StyledMoreButton />
          <StyledCommentInput
            value={this.state.comment}
            placeholder={'Add a comment...'}
            onChange={this.commentInput}
          />
          <StyledInvisibleButton type='submit' onClick={this.addComment} />
        </StyledCommentForm>
      </StyledCommentsContainer>
    );
  }
}

export default CommentSection;
