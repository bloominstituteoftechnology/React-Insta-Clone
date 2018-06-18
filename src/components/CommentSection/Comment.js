import React from 'react'

const Comment = props => {
    return (<div>
        <p><strong>{props.passedUser}</strong>&nbsp;&nbsp;{props.passedText}</p>
    </div>
    )

};

export default Comment