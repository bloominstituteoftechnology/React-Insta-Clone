import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          comments: props.comments,
          timestamp: props.timestamp,
          user: props.user,
          inputText: ''
        }
    }
    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
       }
    addComment = e =>{
        e.preventDefault();
        
       this.setState({
         comments: [
           ...this.state.comments, 
           { text:this.state.inputText,
            username: this.props.user
           }
         ],
         inputText: ''
        });
      }

    render(){  
        return( 
        <section className='comments'>
            {this.state.comments.map((comment,index)=>(
                <div key={index} className='comment'>
                    <span>{comment.username}</span>
                    <p>{comment.text}</p>        
                </div>
            ))}
            <div className='time-stamp'>{this.state.timestamp}</div>
            <form onSubmit={this.addComment}>
                <input
                 type='text'
                 name='inputText'
                 placeholder='Add A Comment'
                 value={this.state.inputText}
                 onChange={this.handleChange}
                />
            </form>
        </section>
        )}
}

export default CommentSection