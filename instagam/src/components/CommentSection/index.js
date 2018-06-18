import React from 'react';
import './style.css';

const CommentSection = (props) => {
    console.log('comments sections: ', props)
    return (
        <div className='commentArea'>
            {props.passedItem.map((item, i) => {
                return (
                    <div key={i} className='postArea'><strong>{item.username}</strong> {item.text}</div>
                )
            })}
        </div>
    )
}
 
export default CommentSection;