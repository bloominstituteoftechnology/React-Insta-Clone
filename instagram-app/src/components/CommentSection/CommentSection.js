import React from 'react';

export default function CommentSection (props) {
    props.comments.map(comment => {
        <div
          className='comment'>
            <h5>{comment.username}</h5> {comment.text}
        </div>
    });
}