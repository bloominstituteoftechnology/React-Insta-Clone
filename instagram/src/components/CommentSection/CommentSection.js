import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment'
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            newComment: ''
        }
        
    }
 
 
addNewComment = (event,index) => {
  event.preventDefault();

    if(this.state.newComment){
    this.setState({comments: [...this.state.comments, this.state.newComment], newComment: '', comment:''});  
    } 
};

handleInput = event =>{ this.setState({newComment: event.target.value});
console.log(this.state.input)}


    render() { 
       
        return (  
                <div className='commnet-section-instances'>
                {this.state.comments.map(comment => 
                <Comment 
                    key={comment.username} comment={comment}
                />)}
                
                <form onSubmit={this.addNewComment}>
       
                        <input onChange={this.handleInput} type="text" placeholder='Add a comment' value={this.commentInput}  />
                        
                </form>
                </div>

        );
    }
}


CommentSection.propType = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}


 
export default CommentSection;