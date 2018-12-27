import React, { Component } from 'react';
import PropTypes from "prop-types";

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            text: props.text,
        };

    }

    render(){
        console.log("Comment: ", this.state)
        return (
            <div>
               <p>username: {this.state.username}</p> 
                <p>comment: {this.state.text}</p>
                <input type="text" value="comment"/>
            </div>
        )
    }
}

Comment.protoTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;

