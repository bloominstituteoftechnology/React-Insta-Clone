import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

const postContainer = (props) => {
    const { data } = props;
    return (
        <div>
            {data.comments.map(comment => {
                return <CommentSection key={comment.id} comment={comment}/>
            })}
        </div>
    )
}

export default postContainer;