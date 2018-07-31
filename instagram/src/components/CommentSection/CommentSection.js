import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import CommentInput from '../CommentSection/CommentInput';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = { 
      comment: [],
      data: []
    }
  }

  componentDidMount() {
    this.setState({ comment: this.props.comment });
    this.setState({ data: this.props.data });
  }

  handleAddComment(e) {
    e.preventDefault();

    const indexOfPost = e.target.dataset.key;
    let input = e.target.children[0].value;
    const newComment = this.state.comment;
    // create the specific comment
    const newCommentObject = {
      username: 'testing' + Math.floor(Math.random() * 100),
      text: input
    };
    // create a new modified comment object 
    const changedComment = this.state.comment[indexOfPost].concat(newCommentObject);
    newComment[indexOfPost] = changedComment;
    
    this.setState({ comment: newComment });

    // create a newDummy data
    const data = this.state.data;
    data[indexOfPost]['comments'] = changedComment;

    this.setState( {data: data} );
  }

  render() {
    const {comment, index, timestamp} = this.props;
    // console.log(this.state.comment)

    return (
      <div>
        <div className="comment-section">
          { comment[index].map(commentObject => {
            const {username, text} = commentObject;
    
            return (
              <div>
                <div className="comment">
                    <p>{ username }</p>
                    <p>{ text }</p>
                </div>

              </div>
            )
          }) }
        </div>
        <Moment parse="MMM D YYYY" className="timestamp" fromNow> {timestamp} ago</Moment>
        <CommentInput handleAddComment={this.handleAddComment.bind(this)} index={index} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }
  ))).isRequired,
  index: PropTypes.number.isRequired
}

export default CommentSection;