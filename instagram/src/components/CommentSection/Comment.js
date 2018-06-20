import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map((comment,index) => {
                return <p key={index} className="comment"><span className="bold-text">{comment.username}</span> {comment.text}</p>
            })}
            <hr />
            <form>
                <input onChange={(e) => props.onChange(e)} className='comment-input' type="text" placeholder="..add new comment" />
            </form>
        </div>
    )
}

CommentSection.propTypes = PropTypes.arrayOf(PropTypes.string.isRequired).isRequired;

export default CommentSection;