import React from 'react';


const Comment = props => {
    return (
        <div className='comment'>
            <p><span className='user'>{props.user}</span> {props.text}</p>
        </div>
    );
};

export default Comment;