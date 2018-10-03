import React from 'react'



const PostHeader = (props) => {

    return (
         <div className='post-header'>
         <img className="thumbnail img" src={props.thumbnail} alt="user-thumbnail"/>    
            <h3>{props.username}</h3>
        </div>
    
    )
}


export default PostHeader