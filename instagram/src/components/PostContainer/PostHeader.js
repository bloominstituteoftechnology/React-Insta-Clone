import React from 'react'
import ReactDOM from 'react-dom'

const PostHeader = (props) => {
    return(
       <>
           <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
<div>{props.username} </div>

            <img style={{borderRadius: 50, height: 40, width: 40}} alt="" src={props.avatar} />
            
           </div>
       </>
    )
}

export default PostHeader 