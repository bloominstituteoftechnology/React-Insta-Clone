import React from 'react'
import ReactDOM from 'react-dom'

const PostHeader = (props) => {
    return(
       <>
           <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
            <img alt="" src={props.avatar} />
            <div>{props.username} </div>
           </div>
       </>
    )
}

export default PostHeader 