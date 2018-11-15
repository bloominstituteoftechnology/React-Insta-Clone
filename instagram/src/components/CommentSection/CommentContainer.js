import React, { Component } from 'react';
import Comment from './Comment';
import shortid from 'shortid';
// import './CommentContainer.sass';
import styled from 'styled-components';

const Div = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    .comment--social-icons {
        margin-top: 4px;
        display: grid;
        width: 100%;
        grid-template-columns: 40px 40px 40px auto;
        div {
            display: flex;
            align-items: center;
            cursor: pointer;
            height: 40px;
            width: 40px;
            span {
                background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs.png/07c1c2c6e459.png);
                display: block;
                background-repeat: no-repeat;
                height: 24px;
                width: 24px;
            }
            &.icon-heart {
                span {
                    background-position: -130px -115px;
                    &.liked {
                        background-position: -104px -115px;
                    }
                }
            }
            &.icon-comment {
                span {
                    background-position: -217px 0px;
                }
            }
            &.icon-share {
                span {
                    background-position: -182px -167px;
                }
            }
            &.icon-bookmark {
                justify-self: end;
                margin-right: -18px;
                span {
                    background-position: -52px -167px;
                }
            }
        }
    }
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
            <Div className="comment-container">
                <div className="comment--social-icons">
                    <div
                        className="icon-heart"
                        onClick={() => {
                            this.likeHandler();
                        }}>
                        {this.state.liked ? <span className="liked" /> : <span />}
                    </div>
                    <div className="icon-comment">
                        <span />
                    </div>
                    <div className="icon-share">
                        <span />
                    </div>
                    <div className="icon-bookmark">
                        <span />
                    </div>
                </div>
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
