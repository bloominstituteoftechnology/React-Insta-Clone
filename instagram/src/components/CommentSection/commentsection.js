import React, { Component } from 'react';
import CommentInput from './commentinput';
import { CommentContainer, CommentCombo, FontAwesomes, Commenter, CommentText, Timestamp } from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/styles'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
            extras: props.extras,
            comment: ''
        }
    } 
    addComment = event => {
        event.preventDefault();
        const newComment = { text: this.state.comment, username: localStorage.getItem('user') };
        const comments = this.state.comments.slice();
        if (this.state.comment ===''){
            return;
        }else{
            comments.push(newComment);
            this.setState({ comments, comment: '' });
        }
    };
    handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <CommentContainer >
                <FontAwesomes className="far fa-heart"></FontAwesomes>
                <FontAwesomes className="far fa-comment"></FontAwesomes>
                <h2 className= 'likes'>{this.state.extras.likes} likes</h2> 
                {this.state.comments.map((comments, i) => 
                    <CommentCombo key= {i} >
                        <Commenter >{comments.username}</Commenter>
                        <CommentText >{comments.text}</CommentText>
                    </CommentCombo>)} 
                <Timestamp >{this.state.extras.timestamp}</Timestamp>   
                <CommentInput 
                    comment= {this.state.comment}
                    handleInputChange={this.handleInputChange}
                    addComment={this.addComment}  />           
            </CommentContainer>
        );
    }    
}



export default CommentSection;