import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import { StyledCommentSection, AddCommentBar } from "../Styles";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
      likes: 0,
      username: ''
    };
  }

  componentDidMount() {
    this.setState({ username: localStorage.getItem('username') })
  }

  increaseLikes = e => {
    this.setState((prevState) => {
      return {likes: prevState.likes + 1}
    })
  }

  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  }

  addNewComment = (e, idx) => {
    console.log(idx);
    e.preventDefault();
    this.setState({ comments: [...this.state.comments, {
      username: this.state.username,
      text: this.state.newComment}],
      newComment: '', });
  };

  render() {
    return (
      <StyledCommentSection>
        {this.state.comments.map((com, idx) => (
          <Comment key={idx} comment={com} />
        ))}
        <form onSubmit={this.addNewComment}>
          <AddCommentBar type="text" 
          name="addComment" 
          placeholder="Add a comment..." 
          value={this.state.newComment}
          onChange={this.changeHandler}
          />
        </form>
      </StyledCommentSection>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
