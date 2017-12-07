import React, { Component } from 'react';
import './commentsection.css';
import { Form } from 'react-bootstrap';
let moment = require('moment');

class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: [{username:"Loading...", text:"Please wait..."}]
        };
    }
    
    updateComment = () => {
        return null;
    }

    submitComment = (event) => {
        event.preventDefault();
    }

    componentDidMount () {
        this.props.comments ? this.setState({comments: this.props.comments}) : null;
    }

    render () {
        return (
            <div className="CommentBox">
                {typeof this.state.comments === "Array" ? this.state.comments.map((item, i) => <div key={i}><p className="userName">{item["username"]}</p>  {item["text"]}</div>) : null}
                {moment(this.state.timestamp, "MMM Do YYYY, HH:mm:ss A").fromNow()}
                <Form>
                    <input onChange={this.updateComment} onSubmit={this.submitComment} id="commentField" type="text" value={this.currentComment} placeholder="Add a comment..."/>
                </Form>
            </div>
        );
    }
}

export default CommentSection;