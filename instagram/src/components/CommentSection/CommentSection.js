import React from 'react';
import Comment from '../CommentSection/Comment';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import 'moment-timezone';

import '../CommentSection/commentsection.css';

const CommentSection = props => {
  // 'July 17th 2017, 12:42:40 pm',
  const { timestamp } = props;
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div className="commentSection">
      {props.comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <Moment parse="MMM-DD-YYYY-hh-mm-ss A" diff={currentDate} unit="days">
        {timestamp}
      </Moment>
      <form>
        <input
          type="text"
          className="commentAdd"
          placeholder="Add a Comment..."
        />
        <FontAwesomeIcon icon="ellipsis-h" className="tripleDot" />
      </form>
    </div>
  );
};

CommentSection.propTypes = {
  comments: propTypes.array.isRequired
};

export default CommentSection;
