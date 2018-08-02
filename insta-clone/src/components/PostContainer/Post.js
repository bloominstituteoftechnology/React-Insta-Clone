import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import styled, { css } from 'styled-components';

const PostContainer = styled.div`
    border: 1px solid grey;
    padding: 20px 0;
    max-width: 642px;
    margin: 0 auto;
    margin-bottom: 20px;
`

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const Thumbnail = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 20px;
`

const BoldText = styled.p`
    font-weight: bold;
    margin: 0;

    ${props => props.bottom && css`
        margin-bottom: 10px;
    `}
`

const LighterText = styled.p`
    font-weight: lighter;
    color: grey;
    font-size: 12px;
`

const PostContent = styled.div`
    margin: 10px 20px;
`

const IconContainer = styled.div`
    margin-bottom: 10px;
    .icon {
        margin-right: 10px;
        font-size: 24px;
    }
    .red {
        color: red;
    }
`

const CommentInput = styled.input`
    border: none;
    background-color: white;
    width: 100%;
    margin-top: 10px;
    &:focus {
        outline: none;
    }
`


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {comments: props.post.comments, currentComment: '', likes: props.post.likes, liked: false, id: props.id};
    }

    componentDidMount() { 
        let comments = JSON.parse(localStorage.getItem(this.state.id));
        if (localStorage.getItem(this.state.id)){
            this.setState({comments});
        } else {
            localStorage.setItem(this.state.id, JSON.stringify(this.state.comments));
        }
    }

    commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }

    addComment = (event, prevState) => {
        event.preventDefault();
        if (this.state.currentComment.length > 0){
            let comment = this.state.currentComment;
            let user = this.props.currentUser;
            let newList = this.state.comments.slice();
            let newComment = {text: comment, username: user};
            newList.push(newComment);
            this.setState({comments: newList, currentComment: ''});
            localStorage.setItem(this.state.id, JSON.stringify(newList));
        }
    }

    deleteComment = (event) => {
        let comments = JSON.parse(localStorage.getItem(this.state.id));
        let result = comments.filter(comment => comment.text !== event.target.innerText)
        localStorage.setItem(this.state.id, JSON.stringify(result));
        this.setState({
            comments: this.state.comments.filter(comment => comment.text !== event.target.innerText)
        })
    }

    toggleLike= () => {
        if (!this.state.liked){
            this.setState((prevState) => {
                return ({likes: prevState.likes + 1, liked: !prevState.liked});
            });
        } else {
            this.setState((prevState) => {
                return ({likes: prevState.likes - 1, liked: !prevState.liked});
            })
        }
    }

    render() {
        return (
            <PostContainer key={this.props.post.timestamp}>
                <Header>
                    <Thumbnail src={this.props.post.thumbnailUrl} alt="thumbnail of user" />
                    <BoldText>{this.props.post.username}</BoldText>
                </Header>
                <img src={this.props.post.imageUrl} alt="user's beautiful post" />
                <PostContent>
                    <IconContainer>
                        <FontAwesomeIcon icon={['far', 'heart']} className={`icon ${this.state.liked ? 'red' : ''}`} onClick={this.toggleLike} />
                        <FontAwesomeIcon icon={['far', 'comment']} className="icon" />
                    </IconContainer>
                    <BoldText bottom>{this.state.likes} likes</BoldText>
                    <CommentSection comments={this.state.comments} deleteComment={this.deleteComment} />
                    <LighterText>{moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</LighterText>
                    <form onSubmit={this.addComment} className="add-comment">
                        <CommentInput type="text" placeholder="Add a comment" onChange={this.commentHolder} value={this.state.currentComment} ></CommentInput>
                    </form>
                </PostContent>
            </PostContainer>
        );
    }
}

export default Post;