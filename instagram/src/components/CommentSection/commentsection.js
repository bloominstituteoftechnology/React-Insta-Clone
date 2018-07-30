import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import './commentsection.css'

const CommentSection = (props) => {
    return ( 
        <div>        
        {console.log(props.data.comments)}
        {props.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username}/>)}
        </div>
    );
}

export default CommentSection;