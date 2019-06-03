import React from 'react';

import Comment from '../Comment/Comment';

const commentSection = (props) => {
    const {comment} = props;
    return (
        <div>
            <Comment comment={comment}/>
        </div>
    )
}

export default commentSection;