import React from 'react';
import Comment from './Comment';
import * as moment from 'moment';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div className="comment-section">
                {props.comments.map(comment => comment.map((comment,index) => 
                    <Comment username={comment.username} text={comment.text} key={index}/>
                    ))}
                <p className="timestamp">{moment().fromNow()}</p>
                <input className="add-comment" type="text" placeholder="Add Comment" />
        </div>
            
    );
}

CommentSection.propTypes = {
    comments: PropTypes.array
}
export default CommentSection