import React from 'react';
import Comment from './Comment';
import * as moment from 'moment';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Form from './Form';

const CommentSection = props => {
    return(
        <div className="comment-section">
                {props.comments.map(comment => comment.map((comment,index) => 
                    <Comment username={comment.username} text={comment.text} key={index}/>
                    ))}
                <p className="timestamp">{moment().fromNow()}</p>
                <Form addComment={props.addComment}/>
        </div>
            
    );
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    addComment: PropTypes.func
}
export default CommentSection