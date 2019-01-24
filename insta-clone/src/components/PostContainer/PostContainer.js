import React from 'react'
import Post from "./Post";

const PostContainer = (props) => {
    return (
        <div className='post-container'>
            {props.data.map((data, index) => {
                return <Post key={index} data={data}/>
            })
            }
        </div>
    )
}

export default PostContainer
        
        