import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

const CommentLikesDiv = styled.div `
    display: flex;
    flex-flow: column nowrap;
    font-weight: bold;
    text-align: left;

    .likes {
        margin: 5px 0px;
    }
`

const CommentContainerDiv = styled.div `
    text-align: left;
    margin: 5px 0px;

    .user {
        font-weight: bold;
    }
`


class CommentLikes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes : props.likes,
            isLiked : false
        }
    }

    addLike = event => {
        event.preventDefault();
        let newLikes = this.state.likes;
        newLikes += 1;
        this.setState({
            likes: newLikes,
            isLiked: true
        })
    }

    subtractLike = event => {
        event.preventDefault();
        let newLikes = this.state.likes;
        newLikes -= 1;
        this.setState({
            likes: newLikes,
            isLiked: false
        })
    }

    render(){
        const isLiked = this.state.isLiked;
        let likeIcon;

        if(isLiked === true) {
            likeIcon = <span className = 'like-icon-true' onClick = {this.subtractLike}><i className = 'fa fa-heart'></i></span>
        } else if (isLiked === false){
            likeIcon = <span className = 'like-icon-false' onClick = {this.addLike}><i className="far fa-heart"></i></span>
        }
        return (
            <CommentLikesDiv>
            <div className = 'like-icons'>
            {likeIcon}
            <span className = 'comment-icon'><i class="far fa-comment-alt"></i>
</span>
            </div>
            <span className = 'likes'>{this.state.likes} likes</span>   
            </CommentLikesDiv>
        )
    }
}

export default CommentLikes;