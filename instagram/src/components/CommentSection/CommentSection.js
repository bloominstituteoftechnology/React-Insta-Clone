import React from 'react';
import './commentSection.css';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.item.comments,
            newComment: ""
        }
    }

    addNewComment = event => {
       event.preventDefault();
       const newComment = {username: 'JakeAndPhil', text: this.state.newComment} 
       const comments = this.state.comments.slice();
       comments.push(newComment)
       this.setState({comments, newComment: ''})
       console.log(newComment)
       
    };
    
    changeHandler= event => {
        console.log('event name', event.target.name);
        console.log('event value', event.target.value);
        this.setState({ newComment: event.target.value });
    };


    render(){
        return (
            <div className = 'commentSection'>
                {this.state.comments.map((comment, index)=>{
                    return (
                        <div className = 'comment'key = {index}>
                            <p><strong>{comment.username}</strong> {comment.text}</p>
                        </div>
                    )
                })}
    
    
                <form className = 'form' onSubmit={this.addNewComment} >
                    <input 
                           type="text" 
                           placeholder="Add a comment..." 
                           onChange={this.changeHandler}
                           
                           />
                        
                </form>  
            </div> 
                           
          
            
        )

    }
}








 
export default CommentSection;
