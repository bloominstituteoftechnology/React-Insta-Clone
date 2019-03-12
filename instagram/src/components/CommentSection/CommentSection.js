import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import styled from 'styled-components'

const CommentContainer = styled.div`
  margin: 10px;
`;
const CommentInput = styled.input`
  width: 90%;
  text-align: left;
  padding: 10px;
  border: none;
`;


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
        if(!(this.state.inputText === '')){
            this.setState({
                comments:[
                ...this.state.comments,
                {username: localStorage.getItem('username'), text: this.state.inputText}
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
        <CommentContainer>
            {this.state.comments.map((comment, index) => (
                <Comment
                comment ={comment}
                key={index}
                />
           ))}
           <form onSubmit={this.addNewComment}>
            <CommentInput 
                type='text' 
                name="inputText" 
                placeholder='Add a comment...' 
                value={this.state.inputText}
                onChange={this.handleChange} 
                />
           </form>
           
            
        </CommentContainer>
    );
    }
    
}

export default CommentSection;