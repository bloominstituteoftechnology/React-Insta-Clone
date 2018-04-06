import React, {Component} from 'react';
import './commentSection.css';




class CommentSection extends Component {

     constructor(props){
       
         super(props);
         this.state = {

         };
     }
render(){
   
    return (
     <div>
        <div className="CommentSection">
            <div class="Commnetator">{this.props.comment.username}  {this.props.comment.text}</div>
            
        </div>
     </div>)
   }
}
export default CommentSection;