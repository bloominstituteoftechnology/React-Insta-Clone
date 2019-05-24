import React from 'react'



const Post = props => {

return(
    <div>
       <div>
       <h2> {props.object.username}</h2>
         <img src = {props.object.thumbnailUrl}></img>

       </div>
          

         <img src = {props.object.imageUrl}></img>

         <h2> Likes: {props.object.likes}</h2>
         <h2>{props.object.timestamp}</h2>

         
         <h2>{props.object.comments.map ( e=> {
              return   e.username
          })}</h2>  
         <p>{props.object.comments.map ( e=> {
              return   e.text
          })}</p>  
       
    </div>
)


}
export default Post