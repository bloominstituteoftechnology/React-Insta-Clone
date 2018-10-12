import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ClockStamp = styled.div`
    color: darkgray;
    font-weight: bold;
    font-size: 12px;
    text-align: left;
    margin-left: 10px;
`

const CommentBox = styled.input`
    margin: 10px 15px;
    width: 50%;
    border: none;
`

const HR = styled.hr`
    width: 590px;
    margin: 10px 15px;
`

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            input: ''
        }
    }

    handleCommentChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    addNewComment = (e) => {
        e.preventDefault();
        const comments = this.state.data.comments.slice();
        comments.push(
            {
                username: localStorage.getItem('user'),
                text: this.state.input,
                id: Date.now()
            }
        );
        this.setState({ data: { comments: comments }, input: '' })
        console.log(this.state.data.comments);
    }

    render() {
        return (
            <div className="CommentSection">
                {this.state.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username} likes={item.likes} />)}
                <ClockStamp>{this.state.data.clockstamp}</ClockStamp>
                <HR />
                <form onSubmit={this.addNewComment}>
                    <CommentBox placeholder="Add a comment..." name="input" type="text" className="form-control no-border" onChange={this.handleCommentChange} value={this.state.input} />
                </form>
            </div>
        );
    }
}

CommentSection.propTypes = {
    data: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default CommentSection;