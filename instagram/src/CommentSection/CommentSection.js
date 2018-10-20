import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import styled from 'styled-components';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.obj.comments,
            counter: this.props.obj.likes,
            input: '',
            liked: false
        }
    }

    handleInput = (event) => {
        const {value} = event.target;
        this.setState({
            input: value
        });
    }

    commentIcon = (event) => {
        event.preventDefault();
        document.getElementById("comment-input").focus();
    }

    addNewComment = (event) => {
        event.preventDefault();
        const newComment = {
            username: "T-rex_Ninja",
            text: this.state.input
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            input: ''
        })
    }

    addNewLike = (event) => {
        event.preventDefault();
        const hearts = this.state.counter;
        const liked = this.state.liked;
        if (liked === false) {
            this.setState({
                counter: hearts+1,
                liked: true
            })
        } else if (liked === true) {
            this.setState({
                counter: hearts-1,
                liked: false
            })
        }
    }

    render() {
        return (
            <CommentSectionStyling>
                <CommentIcons>
                    <a href="#" onClick={this.addNewLike} ><Heart className="far fa-heart"></Heart></a>
                    <a href="#" onClick={this.commentIcon} ><Icons className="far fa-comment"></Icons></a>
                </CommentIcons>

                { this.state.counter === 1 ? 
                    ( <Likes className="like">1 like</Likes> ) :
                    ( <Likes>{this.state.counter} likes</Likes> )
                }

                <CommentsContainer>
                    {this.state.comments.map(item => {
                        return (
                            <Comment key={item.text} username={item.username} text={item.text} />
                        )
                    })}
                </CommentsContainer>

                <Timestamp>{this.props.obj.timestamp}</Timestamp>

                <AddComment onSubmit={this.addNewComment}>
                    <Input onChange={this.handleInput} id="comment-input" placeholder="Add a comment..."></Input>
                    <p>...</p>
                </AddComment>

            </CommentSectionStyling>
        )
    }
}

const CommentSectionStyling = styled.div`
    display: flex;
    flex-direction: column;
`;

const CommentIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 3%;
    margin-top: 10px;
`;

const Icons = styled.i`
    color: black;
    margin-right: 20px;
    font-size: 24px;

    &:hover{
        color: gray;
    }
`;

const Likes = styled.p`
    font-weight: bold;
    font-size: 14px;
    align-self: flex-start;
    margin-left: 3%;
`;

const Heart = styled.i`
    color: black;
    margin-right: 20px;
    font-size: 24px;

    &:hover{
        color: red;
    }
`;

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Timestamp = styled.p`
    font-size: 12px;
    align-self: flex-start;
    margin-left: 3%;
    color: gray;
`;

const Input = styled.input`
    height: 20px;
    font-size: 14px;
    border: none;
`;
const AddComment = styled.form`
    display: flex;
    width: 94%;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    margin-bottom: 40px;
`;


export default CommentSection;