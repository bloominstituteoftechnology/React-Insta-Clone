import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

import { Well } from 'react-bootstrap';
import './PostContainer.css';


export default class PostContainer extends Component {
    constructor() {
        super();
        this.state = {
            post: {},
        };
    }
    componentDidMount() {
        //TBD 
    }
    render() {
        return (
            <Well>
                <div>
                    {this.props.post.username}
                </div>
                <h4>Comments</h4>
                <div>
                    {this.props.post.comments.map((comment, index) => <CommentSection key={index} comment={comment}/>)}
                </div>

                <hr />
            </Well>
        );
    }
};