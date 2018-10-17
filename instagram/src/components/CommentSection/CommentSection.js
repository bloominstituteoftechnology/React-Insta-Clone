import React from 'react'
import ReactDOM from 'react-dom'

import AddComment from './addComment';

const CommentSection = (props) => {
    return(
        <div>
        {props.comments.map(item => <AddComment

            key={item.index}
            username={item.username}
            text={item.text}
        />)}
        </div>
    )

}

export default CommentSection 