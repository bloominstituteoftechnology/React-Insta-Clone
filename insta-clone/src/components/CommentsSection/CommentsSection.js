import React from 'react';
import './CommentsSection.css';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
  margin: 10px;

  i {
    margin-right: 10px;
  }
`;

const Comment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const Username = styled.h1`
  font-size: 20px;
  margin: 0 10px;
`;

const NewComment = styled.input`
height: 35px;
align-self: center;
width: 80%;
margin-bottom: 10px;
`;

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
      likes: props.likes,
      username: props.user
    }
  }

  incrementLikes = event => {
    let likes = this.state.likes;
    likes++;
    this.setState({ likes: likes });
  }

  addComment = event => {
    let currentComments = this.state.comments;
    currentComments.push({
      username: localStorage.getItem('user'),
      text: event.target.value
    });
    event.target.value = '';
    this.setState({ currentComments });
    this.saveState();
  }

  saveState = () => {
    let data = JSON.stringify(this.state.comments);
    data = '{"data":'+data+',"likes":'+this.state.likes+'}';
    let user = this.state.username;
    localStorage.setItem(user, data);
  }

  componentDidMount() {
    if (localStorage.getItem(this.state.username)) {
      let data = JSON.parse(localStorage.getItem(this.state.username));
      this.setState({
        comments: data.data,
        likes: data.likes
      })
    }
  }

  render() {
    return(
      <CommentContainer>
        <h4>{this.state.likes} likes</h4>
        <Buttons>
          <i className='far fa-heart' onClick={ this.incrementLikes } />
          <i className='far fa-comment' />
        </Buttons>
        {this.state.comments.map((comment, i) => {
          return (
            <Comment key={i}>
              <Username>{comment.username}</Username>
              <p className='text'>{comment.text}</p>
            </Comment>
          )
        })}
        <NewComment placeholder='Comment...' onKeyPress={e => {if (e.charCode === 13) {
          this.addComment(e)
        }}} />
      </CommentContainer>
    )
  }
}

export default CommentsSection;
