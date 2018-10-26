import React from 'react'
import PropTypes from 'prop-types';

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