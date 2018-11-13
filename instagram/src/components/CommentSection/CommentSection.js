import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.scss';

import Comment from './Comment';

export default class CommentSection extends React.Component {

  constructor() {

    super();

    this.state = {

      currentComment: ''

    }

  }

  handleChange = e => {

    this.setState({currentComment: e.target.value});

  }

  render() {

    let {comments, time, addComment, id} = this.props;

    return (

      <div className='comment-section'>

        {comments.map(comment => (
          <Comment key={comment.text} comment={comment} />
        ))}

        <p className='time'>{time}</p>

        <form onSubmit={e => {
          e.preventDefault();
          addComment({username: 'captaincrunch17', text: this.state.currentComment}, id);
          this.setState({currentComment: ''});
        }}>

          <input type='text' placeholder='Add a comment...' value={this.state.currentComment} onChange={this.handleChange}/>

        </form>

      </div>

    );

  }

}

CommentSection.propTypes = {

  comments: PropTypes.array,
  time: PropTypes.string,
  addComment: PropTypes.func

}
