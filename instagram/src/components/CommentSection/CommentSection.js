import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default class CommentSection extends Component {
    constructor (){
        super();
        this.state = {};
    }

    render() {
        console.log(this.props.comment.text);
        return (
            <ListGroup> 
                <ListGroupItem>
                    <div>{this.props.comment.username}</div>
                    <div>{this.props.comment.text}</div>
                </ListGroupItem>
            </ListGroup>
        );
    }
};