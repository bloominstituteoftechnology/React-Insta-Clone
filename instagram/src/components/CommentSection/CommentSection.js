import React from 'react';
import { CardBody, CardTitle, CardText } from 'reactstrap';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div>
      {props.words.map(comment => {
        return (
          <div>
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

export default CommentSection;
