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
    console.log(this.state.likes);
    return (
      <div className="commentarea">
        <div className="likes">{this.props.likes} likes</div>
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
