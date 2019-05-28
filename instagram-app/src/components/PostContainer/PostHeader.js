import React from 'react'
import './Posts.css'
 
const PostHeader = props => {
    return (
        <div className = 'PostHeader'>
            <div className = 'thumbWrapper'>
            <img 
             src= {props.thumbnailUrl}/>






        </div>
        <div>

           <h1>{props.username}</h1> 
        </div>
        </div>
    )
}
export default PostHeader;