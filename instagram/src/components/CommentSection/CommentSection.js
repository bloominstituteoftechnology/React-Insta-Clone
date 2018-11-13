import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';




class CommentSection extends Component {
    
    constructor(){
        super();
        this.state={
          comments: [],
          inputText: ''
        }
      }

      componentDidMount(){
        this.setState({ comments: this.props.comments})
      }

      addNewComment = ev =>{
        ev.preventDefault();
        console.log(ev.target);
        console.log(this);
        if(!(this.state.inputText === '')){
            this.setState({
                comments:[
                ...this.state.comments,
                {username: 'anonymous', text: this.state.inputText}
                ],
                inputText: ''
            });
        }
      };

      handleChange = ev =>{
        this.setState({
          [ev.target.name]: ev.target.value
        });
      }

    render(){
        return(
        <div className='comment-section'>
            {this.state.comments.map((comment, index) => (
                <Comment
                comment ={comment}
                key={index}
                />
           ))}
           <form onSubmit={this.addNewComment}>
            <input 
                type='text' 
                name="inputText" 
                placeholder='Add a comment...' 
                value={this.state.inputText}
                onChange={this.handleChange} 
                />
           </form>
           
            
        </div>
    );
    }
    
}

export default CommentSection;