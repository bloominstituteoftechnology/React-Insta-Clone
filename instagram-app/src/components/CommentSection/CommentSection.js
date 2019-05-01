import React from 'react';
import Comment from './Comment';
import * as moment from 'moment';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Form from './Form';

const CommentSection = props => {
    return(
        <div className="comment-section">
            {console.log(props.comments)}
                {props.comments.map((comment,index) => 
                    <Comment username={comment.username} text={comment.text} key={index} addComment={props.addComment}/>
                    )}
                <p className="timestamp">{moment().fromNow()}</p>
                <Form addComment={props.addComment} handleChange={props.handleChange} key={props.index} index={props.index} />
        </div>
          
    );
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    addComment: PropTypes.func,
    handleChange: PropTypes.func,
    index: PropTypes.number
}
export default CommentSection