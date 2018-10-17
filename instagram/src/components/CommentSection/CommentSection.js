import React from 'react';
import ReactDOM from 'react-dom';
import './CommentSection.css'

import AddComment from './addComment';

const CommentSection = (props) => {
    return(
        <div className='CommentSection'>
        {props.comments.map(item => <AddComment

            key={item.index}
            username={item.username}
            text={item.text}
        />)}
        </div>
    )

}

export default CommentSection 