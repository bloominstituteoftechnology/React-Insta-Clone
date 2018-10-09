import React, { Component } from 'react';
import './Comment.css';
import CommentDisplay from './Comment';
import CommentAdd from './NewComment';
 
class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: '',
        };
        
    };

    addNewComment = (event, index) => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, {text: this.state.newComment,
                                                username: 'NewGuy'}],
                                                newComment: '',
        });
    };

    inputChange = event => {
        this.setState({[event.target.name]: event.target.value});   
    };
    
    render() {
        return (
            <div className = 'commentSection'>
                <CommentDisplay comments = {this.state.comments}/>
                <CommentAdd addNewComment = {this.addNewComment}  inputChange = {this.inputChange}/>
            </div>
        );
    }
}

export default CommentSection;

