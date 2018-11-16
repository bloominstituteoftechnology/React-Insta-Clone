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

const Likes = styled.p`
    align-self: flex-start;
    margin-bottom: 7px;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(38, 38, 38);
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

    addCommas = (nStr) => {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };

    render() {
        return (
            <Div>
                <SocialIcons liked={this.state.liked} likeHandler={this.likeHandler} />
                <Likes>{this.addCommas(this.state.likes)} likes</Likes>
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
