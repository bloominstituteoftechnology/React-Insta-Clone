import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

componentDidMount () {

}

componentWillUnmount() {
  
}

 // addComment = comment => {
  //   const newComments = this.state.comments.slice();
  //   newComments.push(comment);
  //   this.setState({ comments: newComments})
  // }

  render() {
    return (
      <div>
        {this.state.comments.map((comments, input) => <Comment key={input} comment={comments} />)}
        <CommentInput />
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