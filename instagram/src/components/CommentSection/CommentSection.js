import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment.js';
import styled from 'styled-components';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      time: props.time,
      inputValue: "",
      newComments: {}
    };
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value,
      newComments: {text: event.target.value, username: localStorage.getItem("Username") }
    })
  }

  addNewComment = (newComment, i) => {
    newComment.preventDefault();
    const newCommentArray = this.state.comments.slice();
    newCommentArray.push(this.state.newComments)
    this.setState({
      inputValue: '',
      comments: newCommentArray
    })
  }

  render() {

    const CommentSection = styled.div`
      ${'' /* border: 1px solid green; */}
      margin: 0 0 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `;

    const Timestamp = styled.p`
      ${'' /* border: 1px solid orange; */}
      margin: 5px 0 0 5px;
      color: gray;
      font-size: 12px;
    `;
    const AddComment = styled.input`
      ${'' /* border: 1px solid purple; */}
      width: 95%;
      height: 20px;
      margin: 10px 0 10px 5px;
    `;

    return (
      <CommentSection>
        {this.state.comments.map( (comment, i) => {
          return <Comment
                    key={i}
                    comments={comment}
                  />
          })
        }
        <Timestamp>{this.state.time}</Timestamp>
        <form onSubmit={this.addNewComment}>
          <AddComment value={this.state.inputValue}
          onChange={this.inputChange} placeholder=" Add a comment...">{this.value}</AddComment>
        </form>
      </CommentSection>
    )
  };
}

CommentSection.propTypes = {comments: PropTypes.array}

export default CommentSection;
