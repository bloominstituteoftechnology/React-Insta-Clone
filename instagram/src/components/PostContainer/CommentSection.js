import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';


class CommentSection extends React.Component{
   
    constructor(){
       super();
       this.state = {
        id: 0,
        comments: [],
        newComment: '',
        timestamp: '',
        username:''
        
    }
   }
   componentDidMount(){
       this.setState({
           id:this.props.id,
           comments:this.props.comments,
           timestamp:this.props.timestamp,
           username:this.props.username
       });
   }
   addComment=event=>{
       if(event.keyCode===13){
           event.preventDefault();
           const newComment={
               username:localStorage.user,
               text:this.state.newCommentInput,
           }
           this.setState({
               comments:[...this.state.comments,newComment],
               newCommentInput:''
           });
       }
   }
   handleComment=event=>{
       this.setState({
           newCommentInput:event.target.value
       });
   }

   
    render(){
        return(
        <div className="comments">
            <div className="list">{this.state.comments.map((comment,index)=>{
                return(
                    <div className="comment" key={index}>
                        <span className="user">{comment.username}</span>
                        <span className="text">{comment.text}</span>
                    </div>
                    );
            })}
           </div>
           <div className="timeStamp">
            <span><div format="YYYY/MM/DD">{this.props.timestamp}</div></span>
           </div>
           <div className="add-comment">
            <input className="comment-input" id={`CommentSection__${this.state.id}`} type="text"placeholder="Add a comment..."value={this.state.newCommentInput} onChange={this.handleComment}onKeyDown={this.addComment} />
              <p className="dots">...</p>      
            </div>
        </div>
        );
    }
};

CommentSection.propTypes={
    id: PropTypes.number,
    newComment: PropTypes.string,
    timestamp: PropTypes.string}
export default CommentSection;