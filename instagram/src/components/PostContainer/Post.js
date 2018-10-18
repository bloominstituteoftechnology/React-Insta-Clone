import React from 'react'
import ReactDOM from 'react-dom'

const Post = (props) => {
    return(
        <div>
        <img alt="" src={props.post} />
        <div>{props.timestamp}</div>
        </div>
    )
}

export default Post 