import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import PropTypes from 'prop-types';

import { CommentWrapper } from '../Styles/Styles';
import { TimeStamp } from '../Styles/Styles';

const CommentSection = props => {
    return <div>
        {props.comments.map((comment, index) => {
          return <CommentWrapper key={index + 1} >
              <Comment comment={comment} />
            </CommentWrapper>;
        })}
        <TimeStamp>{props.timestamp}</TimeStamp>
        <NewComment
            {...props}
        />
      </div>;
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection;