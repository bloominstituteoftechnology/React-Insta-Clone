import React, { Component } from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const Div = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
`;

class CommentContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            likes        : props.likes,
            comments     : props.comments,
            index        : props.index,
            commentInput : '',
            liked        : false
        };
    }
    addNewComment = (event) => {
        this.setState({
            comments : [
                ...this.state.comments,
                { username: 'testingUser', text: event.target[0].value }
            ]
        });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    likeHandler = (event) => {
        if (this.state.liked) {
            this.setState({ ...this.state, liked: false, likes: this.state.likes - 1 });
        } else {
            this.setState({ ...this.state, liked: true, likes: this.state.likes + 1 });
        }
    };
    render() {
        return (
            <Div>
                <SocialIcons liked={this.state.liked} likeHandler={this.likeHandler} />
                <p>{this.state.likes}</p>
                {this.state.comments.map((comment) => <Comment comment={comment} key={shortid.generate()} />)}
                <form
                    onSubmit={(event, index) => {
                        this.setState({
                            commentInput : ''
                        });
                        this.addNewComment(event, index);
                    }}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        name="commentInput"
                        value={this.state.commentInput}
                        onChange={this.handleChange}
                    />
                </form>
            </Div>
        );
    }
}

export default CommentContainer;
