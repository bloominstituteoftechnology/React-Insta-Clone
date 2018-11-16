import React from 'react';
import './CommentSection.css';
import styled from "styled-components";

//styled comps
const Comments = styled.section`
    width: 95%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    form{
        margin: 10px 0;
        border-top: 1px solid #02267b;
        input{
            padding-top: 15px;
            background: #f2eaeb;
            color:#4da6cc;
            border: none;
            width: 100%;
            font-size: 16px;
            :focus{
                outline: none;
                background: #f2eaeb;
            }
        }
    }
`
const Comment = styled.div`
    display: flex;
    font-size: 14px;
    margin-bottom: 5px;
    span{
        margin-right: 5px;
    }
    p{
        color: #02267b;
        font-weight: 500;
        margin: 0;
    }
`
const TimeStamp = styled.div`
    color: #6b6b83;
    font-size: 12px;

`

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
        <Comments>
            {this.state.comments.map((comment,index)=>(
                <Comment key={index}>
                    <span>{comment.username}</span>
                    <p>{comment.text}</p>        
                </Comment>
            ))}
            <TimeStamp>{this.state.timestamp}</TimeStamp>
            <form onSubmit={this.addComment}>
                <input
                 type='text'
                 name='inputText'
                 placeholder='Add A Comment'
                 value={this.state.inputText}
                 onChange={this.handleChange}
                />
            </form>
        </Comments>
        )}
}

export default CommentSection