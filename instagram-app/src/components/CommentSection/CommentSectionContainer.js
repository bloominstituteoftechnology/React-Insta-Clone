import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    /* setting the state to grab the comments from dummyData 
      in App.js
    */

    this.state = {
      comments: props.comments,
      comment: '',
    };
  }

  // grabs the Post Id from dummyData and then calls LocalStorage.
  // sets LocalStorage to look at posts by their ids.
  // then sets the comments for each post using its ID


  componentDidMount() {
    const id = this.props.postId;
    if(localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  handleComments = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(); 
    const newComment = {
      text: this.state.comment,
      username: 'Megan'
    };

    const comments = this.state.comments.slice();
    comments.push(newComment);

    this.setState({
      comments, comment: ''
    });

    setTimeout(() => {
      this.setComments();
    }, 500);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleSubmit}
          changeComment={this.handleComments}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ 
      text: PropTypes.string, 
      username: PropTypes.string 
    })
  )
};

export default CommentSection;
