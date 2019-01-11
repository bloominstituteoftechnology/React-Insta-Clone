import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsCon = styled.div`
`
const CommentsIcons = styled.div`
  display: flex;
`
const CommentIcon = styled.div`
  width: 24px;
`
const CommentsLikes = styled.div`
`
const CommentsConAll = styled.div`
  > div {
  padding-bottom: 5px;
  }
`

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      likes: this.props.likes
    }    
  }

  componentDidMount(){
    this.setState({comments: this.props.comments});
  }

  handleNewComment = (event) => {
    this.setState({newComment: event.target.value});
  }

  onCommentAdd = (event) => {
    event.preventDefault();
    const newComments = this.state.comments.slice();
    const currentUser = localStorage.getItem('user');
    newComments.push({username: currentUser, text: this.state.newComment});
    this.setState({
        comments: newComments, 
        newComment: ""
      }, () => console.log(this.state.comments, this.state.newComment))
  }

  onCommentLike = (event) => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }

  render(){
    return (
      <CommentsCon>
        <CommentsIcons>
          <CommentIcon className="comment-heart-icon" onClick={this.onCommentLike}>
            <i className="far fa-heart"></i>
          </CommentIcon>
          <CommentIcon className="comment-comment-icon">
            <i className="far fa-comment"></i>
          </CommentIcon>
        </CommentsIcons>
        <CommentsLikes className="comments-likes">{this.state.likes} likes</CommentsLikes>
        <CommentsConAll className="comments-con">{this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        </CommentsConAll>
        <div className="timestamp">{this.props.timestamp}</div>
        <div className="comments-input">
          <CommentInput handleNewComment={this.handleNewComment} newComment={this.state.newComment} onCommentAdd={this.onCommentAdd}/>
        </div>
      </CommentsCon>
    )
  }
}







CommentSection.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string
};

export default CommentSection;