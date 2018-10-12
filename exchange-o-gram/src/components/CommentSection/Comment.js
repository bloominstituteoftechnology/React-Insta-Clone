import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import './CommentSection.css';

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 8px;

    p{
        width: 93%;
        overflow-wrap: break-word;

        strong{
            font-weight: bold;
        }
    }
`;

const CommentMenu = styled.div`
    position: relative;
    padding: 0 5px;
    background-color: lightgray;
    border-radius: 5px;
    cursor: pointer;
`;

const DeleteComment = styled.div`
    position: absolute;
    top: 0px;
    left: -85px;
    padding: 0px 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;

    ${props => props.displayDeleteComment ? null : `display: none;`}
`;

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayDeleteComment: false
        }
    }
    
    askForDelete = (event)=>{
        event.preventDefault();
        if(this.state.displayDeleteComment){
            this.setState({
                displayDeleteComment: false
            })
        }
        else{
            this.setState({
                displayDeleteComment: true
            })
        }
    }

    deleteComment = (event)=>{
        event.preventDefault();
        this.props.deleteComment(this.props.postIndex, this.props.commentIndex);
    }
    render(){
        return(
            <CommentContainer>
                <p><strong>{this.props.comment.username}</strong> {this.props.comment.text}</p>
                <CommentMenu onClick={this.askForDelete}>···
                    <DeleteComment displayDeleteComment={this.state.displayDeleteComment} onClick={this.deleteComment}>Delete?</DeleteComment>
                </CommentMenu>
            </CommentContainer>
        )
    }
}

DeleteComment.propTypes = {
    displayDeleteComment: PropTypes.bool
}

Comment.propTypes = {
    postIndex: PropTypes.number.isRequired,
    commentIndex: PropTypes.number.isRequired,
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }).isRequired,
    deleteComment: PropTypes.func.isRequired
}

export default Comment;