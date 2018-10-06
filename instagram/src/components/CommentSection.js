import React from 'react';


class CommentSection extends React.Component{
   constructor(){
       super();
       this.state = {
        id: 0,
        comments: [],
        newComment: '',
        timestamp: '',
    }
   }
   componentDidMount(){
       this.setState({
           id:this.props.id,
           comments:this.props.comments,
           timestamp:this.props.timestamp,
       });
   }
   addComment=event=>{
       if(event.keyCode===13){
           event.preventDefault();
           const newComment={
               username:'jeff',
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
                    <div key={index}>
                        <span className="user">{comment.username}</span>
                        <span className="text">{comment.text}</span>
                    </div>
                    );
            })}
           </div>
           <div className="timeStamp">
            <span><moment parse="MMMM do YYYY, hh:mm:ss A" fromNow>{this.state.timestamp}</moment></span>
           </div>
           <div className="add-comment">
            <input id={`CommentSection__${this.state.id}`} type="text"placeholder="Add a comment..."value={this.state.newCommentInput} onChange={this.handleComment}onKeyDown={this.addComment}/>
            </div>
        </div>
        );
    }
};
export default CommentSection;