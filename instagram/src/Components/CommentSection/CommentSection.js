import React from 'react'; 
import PropTypes from 'prop-types'

class CommentSection extends React.Component {
  constructor(props){
  super(props); 
  this.state = {
      comments: props.comments,
      likes: props.likes,
      timestamp: props.timestamp,
      input: ""
   }
  }

  likesHandler = () =>{
    this.setState({
        likes: ++this.state.likes
    })
  }

  commentHandler = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    });
  };

   addNewComment = (event) => {
    if (this.state.input) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            text: this.state.input,
            username: "Anonymous"
          }
        ]
      });
     event.currentTarget.value = null;
    }
  };

   submitHandler = event => {
     if (event.keyCode === 13 && event.shiftKey === false) {
       if (this.state.input.length >= 1)
         event.preventDefault();
         this.addNewComment(event);
     }
   };


render(){
  return (
    <div className="commentContainer">
      <div className="likeTab">
        <i class="far fa-heart" onClick={this.likesHandler}></i>
        <i class="far fa-comment"></i>
      </div>
      <p className="userLikes"><span>{this.state.likes}</span>likes</p>
      <div>
        {this.state.comments.map( (comment, index) =>{
          return <p className="userComments" key={index}>
                   <span>{comment.username}</span>
                 {comment.text}</p>  
        })}
      </div> 
      <p className="timeStamp">{this.state.timestamp}</p>
      <hr/> 
      <div className="pageFooter">

      <form className="comment-form" onSubmit={this.addNewComment}>
        <textarea
          value={this.state.input} 
          onChange={this.commentHandler} 
          onKeyDown={this.submitHandler} 
          placeholder="Add a comment..."
        />
      </form>
      <p id="footerTab">...</p>  
      </div> 
    </div> 
   )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    likes: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string, 
     }))
    .isRequired
  }
  
export default CommentSection;