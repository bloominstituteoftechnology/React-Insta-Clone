import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentInput: ''
    };
  }

  addComment = e => {
    e.preventDefault();
    const NewComment = [
      ...this.state.comments,
      { text: this.state.commentInput, username: 'Troll' }
    ];

    this.setState({
      comments: NewComment,

      commentInput: ''
    });
  };

  handleInput = e => {
    this.setState({
      commentInput: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div style={comment1}>
          <div style={ico}>
            <i style={space} className="far fa-heart" />

            <i style={space} className="far fa-comment" />
          </div>

          {this.state.comments.map((c, index) => (
            <Comment text={c.text} username={c.username} key={index} />
          ))}
        </div>
        <CommentInput
          handleAddComment={this.addComment}
          handleInput={this.handleInput}
          value={this.state.commentInput}
        />
        <div />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

const space = {
  paddingRight: '10px'
};
const ico = {
  fontSize: '25px'
};

const comment1 = {
  borderBottom: '1px solid lightGray',

  margin: '0px 10px',
  marginTop: '10px'
};

export default CommentSection;
