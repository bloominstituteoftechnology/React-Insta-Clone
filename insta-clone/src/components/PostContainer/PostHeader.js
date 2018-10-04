import React from 'react'
import './PostContainer.css'


const PostHeader = (props) => {

    return (
         <div className='post-header'>
         <img className="thumbnail img" src={props.thumbnail} alt="user-thumbnail"/>
            <h3>{props.username}</h3>
        </div>

    )
}


export default PostHeader