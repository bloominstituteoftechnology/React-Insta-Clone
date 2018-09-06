import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    };
  }
  addNewComment = event => {
    event.preventDefault();
    const user = localStorage.getItem('user')
    this.setState({
      comments: [
        ...this.state.comments,
        { text:this.state.newComment, username:user}
      ],
      newComment:""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          Text={this.state.newComment}
          />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
