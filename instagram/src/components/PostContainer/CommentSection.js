import React from 'react'
import './CommentSection.css'
import * as Icon from 'react-feather'
import { Input } from 'reactstrap';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment:''
    };
  
  }

  

  addNewComment =  event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments, 
        { text: this.state.comment,
          username: "Groucho Marx"
        }
      ],
      comment: ''
    })
   }
  
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  increaseLikes = event => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return(
      <div className="commentSection">
        <div className="likeAndComment">
          <div className="likeAndCommentIcons">
            <Icon.Heart 
              className="icons"
              onClick={this.increaseLikes}/>
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
              name="comment"
              placeholder="Add a comment..."
              type="text"
              onChange={this.handleInputChange}
              value={this.state.comment} />
         </form>   
      </div>
    )
  }
}

export default CommentSection;