import React from 'react'
import PostContainer from '../PostContainer/PostContainer'


const Comment  = props => {

    return ( 

        <div>
             <h1> YO!{props.object.comments.map ( e=> {
              return e.text
          })}</h1>
        </div>
  
     )
}
export default Comment