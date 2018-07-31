import React from 'react';
import Comment from './comment';
import './commentsection.css'
import PropTypes from 'prop-types';


const CommentSection = (props) => {
    return ( 
        <div>      
            {props.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username} likes={item.likes}/>)}
            <div className="timestamp">{props.data.timestamp}</div>
            <hr/>
            <form>
                <input placeholder="Add a comment..." type="text" className="form-control no-border comment-field"/>
            </form>
        </div>
    );
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default CommentSection;