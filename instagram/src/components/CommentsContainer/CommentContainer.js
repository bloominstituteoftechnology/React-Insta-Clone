import React from 'react';
import Comment from './Comment';
import InputComment from './InputComment';

import {PostIconsContainer, PostHeadingBold, Timestamp} from '../PostContainer/PostsStyled';

class CommentContainer extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp,
            inputText: '',
            likes: props.likes, //400 likes
            like: false,
            username: props.username
        };
    }

    handleLike = () => {
        let likesNum = this.state.likes;
        if(this.state.like === false) {
            likesNum++
        } else {
            likesNum--
        }
        this.setState({
            likes: likesNum,
            like: !this.state.like
        })
    }

    handleChange = event =>{
        this.setState({
            inputText: event.target.value
        })
    }

    handleAddComment = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, {username: this.state.username, text: this.state.inputText}],
            inputText: ''
        })
    }

    render() {
        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} commentData={comment}/>; 
        });

        return (
            <div className="post-container">
                <PostIconsContainer>
                    <i onClick={this.handleLike} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </PostIconsContainer>

                <PostHeadingBold className="mg-bottom">{this.state.likes} likes</PostHeadingBold>
                {comments}
                <Timestamp>{this.state.timestamp}</Timestamp>
                <InputComment inputText={this.state.inputText} handleChange={this.handleChange} handleAddComment={this.handleAddComment}/>
            </div>
        );
    }

}

export default CommentContainer;