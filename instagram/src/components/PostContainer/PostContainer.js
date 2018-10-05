import React from 'react';


const PostContainer = props =>{
    return(
       <div>
       <div className='post-header'>
           <img src ={props.post.thumbnailUrl} alt=''/>
           <h1>{props.post.username}</h1>
           <div className="post-img">
               <img src={props.post.imageUrl} alt=''/>
           </div>
       </div>
    </div>

    )
}
    
       
export default PostContainer