import React from 'react'
import Post from './Post';

function PostContainer(props) {
    return (
        <div>
            {props.datasetInfo.map(info => {
                return <Post key={info.username} info={info}/>})}
                
            

        </div>

    )     
} // main curly 





export default PostContainer;