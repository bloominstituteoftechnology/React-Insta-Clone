import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Comment.css'

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            text: props.text,
        };

    }

    render(){
        // console.log("Comment: ", this.state)
        return (
            <div className='comment'>
               <p className='username'>{this.state.username}</p> 
                <p className='text-comment'>{this.state.text}</p>
            </div>
        )
    }
}

Comment.protoTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;

