import React, { Component } from 'react';
import Comment from "./Comment";
import CommentInput from './CommentInput'
import options from '../../assets/options.jpg';
import styled from 'styled-components';

const BottomInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const OptionsImage = styled.img`
    width: 20px;
`;

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        }
    }

    changeHandler = event => {
        this.setState({comment: event.target.value})
    }

    addNewComment = event => {
        event.preventDefault();
        const newComment = {text: this.state.comment, username: 'Fred'};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
    }

    render() {
        return(
            <div>
                <Comment comments={this.state.comments} />
                {/* <p className="timeStamp">{this.comments.timestamp}</p> */}
                <BottomInput>
                    <CommentInput 
                        addNewComment={this.addNewComment}
                        changeHandler={this.changeHandler}
                        comment={this.state.comment}
                    />
                    <OptionsImage src={options} alt="Comment Options" />
                </BottomInput>
            </div>
        );
    }
}

export default CommentSection;