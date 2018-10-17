import React from 'react'
import './CommentSection.css'
import * as Icon from 'react-feather'
import { Input } from 'reactstrap';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes
    };
  
  }

  

  addNewComment =  (event, i) => {
    i = this.state.comments.length;
    console.log(i);
    console.log(event.target.value);
    event.preventDefault();
   }
  

  render() {
    return(
      <div className="commentSection">
        <div className="likeAndComment">
          <div className="likeAndCommentIcons">
            <Icon.Heart className="icons"/>
            <Icon.MessageCircle className="icons" />
          </div>  
          <p>{this.state.likes} likes</p>
        </div>
          <div>
            {this.state.comments.map( (comment, i) => {
               return (
                  <div className="comment" key={i}>
                     <h3>{comment.username}</h3>
                     <p>{comment.text}</p>
                  </div>
                  )
              })}
          </div> 
          <form onSubmit={this.addNewComment}>
            <Input 
              placeholder="Add a comment..."
              type="text" />
         </form>   
      </div>
    )
  }
}

export default CommentSection;