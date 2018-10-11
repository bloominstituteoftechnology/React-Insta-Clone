import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import styled from 'styled-components';
//import './PostContainer.css'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto 30px auto;
    border: 1px solid #e7e7e7;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 40px;
        height: 40px;
        margin: 25px 15px 25px 20px;
        border-radius: 50%;
    }

    p{
        font-size: 2.2rem;
        font-weight: bold;
    }
`;

const CardImage = styled.img`
    width: 100%;
`;

class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.post.comments
        }
    }

    render(){
        if(this.props.post.isHidden){
            return null;
        }
        return(
            <CardContainer>
                <CardHeader>
                    <img src={this.props.post.thumbnailUrl} alt={`${this.props.post.username} Icon`}></img>
                    <p>{this.props.post.username}</p>
                </CardHeader>
                <CardImage src={this.props.post.imageUrl} alt={`${this.props.post.username} Post`}></CardImage>
                <CommentSection postIndex={this.props.index} likes={this.props.post.likes} comments={this.state.comments} timeStamp={this.props.post.timestamp} addLike={this.props.addLike} addNewComment={this.props.addNewComment} deleteComment={this.props.deleteComment}/>
            </CardContainer>
        )
    }
}

PostContainer.propTypes = {
    index: PropTypes.number,
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    }),
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired
}

export default PostContainer;