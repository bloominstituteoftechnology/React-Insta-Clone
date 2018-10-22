import React from 'react'

const PostHeader = (props) => {
    return(
       <>
       <div style={{display: 'flex', flexDirection: 'row'}}>
       <img style={{borderRadius: 50, height: 40, width: 40}} alt="" src={props.avatar} />
       <div>{props.username} </div>
       </div>
       </>
    )
}

export default PostHeader 