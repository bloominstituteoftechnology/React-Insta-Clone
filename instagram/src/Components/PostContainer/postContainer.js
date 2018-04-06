import React, { Component } from 'react';
import './postContainer.css';
import CommentSection from '../CommentSection/commentSection';



class PostContainer extends Component {
   constructor(props){
       super(props)
       this.state ={
        
       }
   }   
render(){
     console.log(this.props.posteProps);
    return ( 
        
        <div>{
 this.props.posteProps.map(p => { return (

         <div className="Hilal">
            <div className="Top_content">
                <img src={p.thumbnailUrl}/>
                {p.username}
            </div>
            <div className="Midle_content">
                 <img className="Midle_img" src={p.imageUrl}/>
            </div>
            <div>
                {p.likes}
            </div>
            <div>
                {p.comments.map(comment => <CommentSection comment = {comment} />)}      
            </div>
             <div>
                {p.timestamp}
            </div>
 
       </div>
 )
})

 }</div>
)
}
}
export default PostContainer;