import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => (
  <div>
    <div className="row icons">
      <div>
        <i className="col-sm-1 far fa-heart" />
      </div>
      <div>
        <i className="col-sm-1 far fa-comment fa-flip-horizontal" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">{props.post.likes} likes</div>
    </div>
    <div>
      {props.post.comments.map(c => (
        <div key={uuid()} className="row">
          <p className=" comment username">{c.username}</p> &nbsp;
          <p className="comment text">{c.text}</p>
        </div>
      ))}
    </div>
  </div>
);

CommentSection.propTypes = {
  commnet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
};
export default CommentSection;
