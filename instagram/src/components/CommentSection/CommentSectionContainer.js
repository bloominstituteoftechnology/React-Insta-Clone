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

  componentDidMount() {
   const id = this.props.postId;
    if (localStorage.getItem(id)) {
     this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
     this.setComments();
    }
  }

componentDidUpdate() {
  localStorage.setItem(
    this.props.postId,
    JSON.stringify(this.state.comments)
   );
  
}

componentWillUnmount() {
  // this.setComments();
}

setComments = () => {
  localStorage.setItem(
   this.props.postId,
   JSON.stringify(this.state.comments)
  );
};

commentHandler = elem => {
  this.setState({ comment:elem.target.value });
}

commentSubmitHandler = elem => {
  elem.preventDefault();
  const addNewComment = {text: this.state.comment, username: 'Interent Rando'}
  const comments=this.state.comments.slice();
  comments.push(addNewComment);
  this.setState({comments, comment: ' '})

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
        <CommentInput
          comment={this.state.comment}
          submitAComment={this.commentSubmitHandler}
          changeAComment={this.commentHandler}
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