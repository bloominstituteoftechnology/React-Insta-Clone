import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  addNewComment = event => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({event: this.state.comments});
    this.setState({comments});
  };

    // return this.state.comments.map((c, i) => <Comment key={i} comment={c}/>)};

  


  render() {
    return (
      <div className="commentarea">
        <div>{this.state.likes}</div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput handleaddNewComment= {this.addNewComment}/>
      </div>
    );
  }
};


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
