import React from 'react';
import './NewCommentSection.css';
import PropTypes from 'prop-types';

const NewCommentSection = props =>{
    return(
        <div>
            <div className='new-comment-section'>
                <div className='new-comment-add'>
                    <form onSubmit={props.addNewComment}>
                        <input id={props.postId} value={props.newComment} placeholder='Add a comment...' onChange={props.handleCommentChange} />
                    </form>
                </div>
                <div className='new-comment-tools'><p>...</p></div>
            </div>
        </div>
    )
}

NewCommentSection.propTypes = {
    addNewComment: PropTypes.func,
    commentId:PropTypes.number
}


export default NewCommentSection;
