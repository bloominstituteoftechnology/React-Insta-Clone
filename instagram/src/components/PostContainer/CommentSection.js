import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';


class CommentSection extends React.Component{
   
    constructor(props){
       super(props);
       this.state = {
        comments: props.comments,
        likes: props.likes,
        timestamp: props.timestamp,
        input: ""
        
    }
   }

   addComment=event=>{
    
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
   handleComment=event=>{
    const {value} = event.target;
    this.setState({
      input: value,
    });
   }
   handleSubmit=event=>{
    if (event.keyCode === 13 && event.shiftKey === false) {
        if (this.state.input.length >= 1)
          event.preventDefault();
          this.addComment(event);
      }
   }
   handleLikes=event=>{
       this.setState({
           likes:++this.state.likes
       })
   }
   
    render(){
        return(    
        <div className="comments">
        <div className="likeTab">
          
          <i class="far fa-heart"onClick={this.handleLikes}></i>
          <i class="far fa-comment"></i>
        </div>
        <p className="userLikes"><span>{this.state.likes}</span> likes</p>
        <div>
          {this.state.comments.map( (comment, index) =>{
            return <p className="user" key={index}>
                     <span>{comment.username}</span>
                   {comment.text}</p>  
          })}
        </div> 
        <p className="timeStamp">{this.state.timestamp}</p>
        <hr/> 
        <div className="pageFooter">
  
        <form className='add-comment' onSubmit={this.addComment}>
          <textarea className="comment-input"
            value={this.state.input} 
            onChange={this.handleComment} 
            onKeyDown={this.handleSubmit} 
            placeholder="Add a comment..."
          />
        </form>
        <p id="dots">...</p>  
        </div> 
      </div> 
        //<div className="comments">
            //</div><div className="list">{this.state.comments.map((comment,index)=>{
               // return(
                   // <div className="comment" key={index}>
                      //  <span className="user">{comment.username}</span>
                       // <span className="text">{comment.text}</span>
                   // </div>
                   // );
           // })}
           //</div>
           //<div className="timeStamp">
            //<span><div format="YYYY/MM/DD">{this.props.timestamp}</div></span>
          // </div>
          // <div className="add-comment">
            //<input className="comment-input" id={`CommentSection__${this.state.id}`} type="text"placeholder="Add a comment..."value={this.state.newCommentInput} onChange={this.handleComment}onKeyDown={this.addComment} />
              //<p className="dots">...</p>      
            //</div>
        //</div>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string, 
      likes:PropTypes.number,
       }))
      .isRequired
    }
export default CommentSection;