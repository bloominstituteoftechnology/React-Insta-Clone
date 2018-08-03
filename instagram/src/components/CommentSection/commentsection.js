import React, { Component } from 'react';
import Comment from './comment';
import './commentsection.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Timestamp = styled.div`
    color: gray;
    font-weight: bold;
    font-size: 10px;
    text-align: left;
    margin-left: 15px;
`

const CommentField = styled.input`
    margin: 10px 15px;
    width: 75%;
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

    handleCommentChange = event => {
        this.setState({[event.target.name]: event.target.value})
      };

    addNewComment = (event) => {
        event.preventDefault();
        const comments = this.state.data.comments.slice();
        comments.push(
            {
            username: localStorage.getItem('user'),
            text: this.state.input,
            id: Date.now()
            }
        );
        this.setState({data: {comments: comments}, input: ''})
        console.log(this.state.data.comments);
    }

    render(){
        return ( 
            <div>      
                {this.state.data.comments.map(item => <Comment username={item.username} text={item.text} key={item.username} likes={item.likes}/>)}
                <Timestamp>{this.state.data.timestamp}</Timestamp>
                <HR />
                <form onSubmit={this.addNewComment}>
                    <CommentField placeholder="Add a comment..." name="input" type="text" className="form-control no-border" onChange={this.handleCommentChange} value={this.state.input} />
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