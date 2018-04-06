import React from 'react';
import { CardBody, CardTitle, CardText } from 'reactstrap';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div>
      {props.words.map(comment => {
        return (
          <div key={comment.text}>
            <CardBody className="cmtBody">
              <CardTitle className="cmtUsername">
                <div>{comment.username}</div>
              </CardTitle>
              <CardText className="cmtText">
                <div>{comment.text}</div>
              </CardText>
            </CardBody>
          </div>
        );
      })}
    </div>
  );
};

CommentSection.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;