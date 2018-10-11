import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import styled from 'styled-components';
//import './CommentSection.css';

const CommentSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 93%;
    margin: 0 auto;
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
    font-size: 1.5rem;
    margin: 20px 0 15px 0;
`;

const CommentsContainer = styled.div`
    margin-bottom: 8px;
`;

const Likes = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
`;

const TimeStamp = styled.p`
    color: #999999;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
`;

const CommentForm = styled.form`
    width: 100%;
    border-top: 1px solid #e7e7e7;
`;

const AddComment = styled.input`
    border: none;
    width: 100%;
    height: 50px;
    font-size: 1.8rem;
    outline: none;

    ${props => props.value ? `font-weight: normal;` : `font-weight: bold;`}
`;

class CommentSection extends React.Component{
    constructor(props){
        super(props);

        const format = 'MMMM DD YYYY hh:mm:ss';

        this.state = {
            postIndex: props.postIndex,
            comments: props.comments,
            newComment: '',
            timeStamp: moment(props.timeStamp, format).fromNow().toUpperCase()
        }
    }

    addNewComment = (event)=>{
        event.preventDefault();
        this.props.addNewComment(this.state.newComment, this.state.postIndex);
        this.setState({
            newComment: ''
        })
    }

    storeNewComment = (event)=>{
        this.setState({
            newComment: event.target.value
        })
    }

    addLike = (event)=>{
        event.preventDefault();
        this.props.addLike(this.state.postIndex);
    }

    render(){
        return (
            <CommentSectionContainer>
                <IconsContainer><i onClick={this.addLike} className="far fa-heart fa-2x"></i><i className="far fa-comment fa-2x"></i></IconsContainer>
                <Likes>{this.props.likes} likes</Likes>
                <CommentsContainer>{this.state.comments.map((comment, index)=>{
                        return(
                            <div key={comment.text}>
                                <Comment postIndex={this.state.postIndex} commentIndex={index} comment={comment} deleteComment={this.props.deleteComment}/>
                            </div>
                        )
                    })}
                </CommentsContainer>
                <TimeStamp>{this.state.timeStamp}</TimeStamp>
                <CommentForm onSubmit={this.addNewComment}>
                    <AddComment onChange={this.storeNewComment} placeholder="Add a comment..." value={this.state.newComment}></AddComment>
                </CommentForm>
            </CommentSectionContainer>
        )
    }
}

CommentSection.propTypes = {
    postIndex: PropTypes.number,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired
}

export default CommentSection;