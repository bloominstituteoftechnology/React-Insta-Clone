import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import PropTypes from 'prop-types';
import './CommentSection.css'

const CommentSection = props => {
    // console.log(props.comments)
    return <div>
        {props.comments.map((comment, index) => {
          return <div key={index + 1} className="commentSection">
              <Comment comment={comment} />
            </div>;
        })}
        <p className="timeStamp">{props.timestamp}</p>
        <NewComment
            {...props}
            // username={props.username}
            // changeHandler={props.changeHandler}
            // newComment={props.newComment}
            // addComment={props.addComment}
            // postIndex={props.postIndex}
        />
      </div>;
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentSection;