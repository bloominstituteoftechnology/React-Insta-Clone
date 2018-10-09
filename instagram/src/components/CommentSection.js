import React from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types';

function CommentSection(props) {
    return (
        <div className='commentSection'>
             {props.postComments.map(comment => { 
                 return <Comment commentData={comment}/>
            })}
        </div>
    )
}

CommentSection.propTypes = {
    commentData: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;