import React from 'react';
import Comment from './Comment'
import './Comment.css'
import AddComment from './AddComment'
import styled from 'styled-components';

const CommentContainer = styled.div`
    padding: 20px 20px 10px 20px;
`
const Time = styled.div`
    color: grey;     
    font-size: 14px;  
    padding-bottom: 10px;
`

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.data.comments,
            date: props.data.timestamp,
            newComment: '',
            username: 'jaymzsocool'
        }
    }    

    updateNewComment = event => this.setState({newComment : event.target.value})

    addNewComment=event=>{
        event.preventDefault();
        let comments = this.state.comments.slice();
        comments.push({username : this.state.username, text: this.state.newComment})
        this.setState( {comments: comments, newComment: ""})
    }

    render(){
        return(
            <CommentContainer>
                {this.state.comments.map(data =>
                <Comment
                    name = {data.username}
                    comment = {data.text}
                />
                )}
                <Time>
                    {this.state.date}
                </Time>
                <AddComment 
                    handleAdd = {this.addNewComment}
                    value = {this.state.newComment}
                    handleUpdate = {this.updateNewComment}
                />
            </CommentContainer>
        ) 
    }
          
    
    
           
}

export default CommentSection