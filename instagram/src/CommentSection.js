
import React from 'react'

const CommentSection = (props) => {
    return(
<div data-id={props.obj.timestamp}>
    {props.obj}
</div>    )
}

export default CommentSection;