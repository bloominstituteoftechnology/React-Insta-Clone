import React, { Component } from 'react';
import './commentbox.css';

class CommentBox extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comment: props.data
        };
        console.log(props.data);
    }

    render () {
        return (
            <div className="CommentBox">
                {this.state.comment.map((item, i) => <div key={i}><p className="userName">{item["username"]}</p>  {item["text"]}</div>)}
            </div>
        );
    }
}

export default CommentBox;