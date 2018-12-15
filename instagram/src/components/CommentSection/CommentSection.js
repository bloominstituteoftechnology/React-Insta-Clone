import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = props => {
    return (
      <form>
        <input type="text" placeholder="Add comment... " />
      </form>
    );
  };
/////////////////////////////////////////////////////////////////////

 const Comment = ( props ) =>
{
  return (
    <div>
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </div>
  )
}
///////////////////////////////////////////////////////////////////////

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
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
