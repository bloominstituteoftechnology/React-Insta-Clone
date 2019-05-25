import React from 'react'



const Post = props => {

return(
    <div>
       <div>
       <h2> {props.name}</h2>
         <img src = {props.imgThumbnail}></img>

       </div>
          

         <img src = {props.img}></img>

         <h2> Likes: {props.likes}</h2>
         <h2>{props.time}</h2>

         
         
       
    </div>
)


}
export default Post