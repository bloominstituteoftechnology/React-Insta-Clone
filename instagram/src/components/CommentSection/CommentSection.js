import React from 'react';
import './commentSection.css';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.item.comments,
            comment: "",
            placeholder: 'Add a comment...'
        }
    }

    addNewComment = event => {
       event.preventDefault();
       const newComment = {username: 'JakeAndPhil', text: this.state.comment} 
       const comments = this.state.comments.slice();
       comments.push(newComment)
       this.setState({comments, comment: '', placeholder: 'Add a comment...'})
       console.log(newComment)
       
    };
    
    changeHandler= event => {
        console.log('event name', event.target.name);
        console.log('event value', event.target.value);
        this.setState({ comment: event.target.value });
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
                    <input className = 'addComment' 
                           type="text" 
                           placeholder= {this.state.placeholder} 
                           onChange={this.changeHandler}
                           value={this.state.comment}
                           />
                        
                </form>  
            </div> 
                           
          
            
        )

    }
}








 
export default CommentSection;

